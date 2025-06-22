import { execSync } from 'child_process';
import readline from 'readline';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.DB_PORT || '5432';

const runCommand = (command: string) => {
  execSync(command, { stdio: 'inherit' });
};

const promptYesNo = (question: string): Promise<boolean> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(`${question} [ yes / NO ]:\n`, (answer) => {
      rl.close();
      resolve(answer.trim().toLowerCase() === 'yes');
    });
  });
};

(async () => {
  try {
    console.log('🕵️‍♀️ Checking if PostgreSQL is ready...');
    try {
      runCommand(`pg_isready -h 127.0.0.1 -p ${port}`);
    } catch {
      console.log('😴 PostgreSQL is NOT ready!');
      runCommand('sudo service postgresql start');
    }

    const rebuild = await promptYesNo('⚠️ Do you want to DROP and RESEED the database before building? 🤔');

    if (rebuild) {
      runCommand('npm run rebuild-db');
    } else {
      console.log('ℹ️ Database will NOT be rebuilt...');
    }

    console.log('👷‍♀️ Building the site...');
    runCommand('next build');

    console.log('🗺️ Generating sitemap...');
    runCommand('npx tsx scripts/generate-sitemap.ts');

    console.log('🎉 Site build is complete! 😄');
  } catch (err) {
    console.error('❌ Error during prebuild process:', err);
    process.exit(1);
  }
})();