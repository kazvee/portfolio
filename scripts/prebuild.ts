import { execSync } from 'child_process';
import readline from 'readline';
import dotenv from 'dotenv';
import { fetchRss } from './fetchRss';

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

    const args = process.argv.slice(2);
    let rebuild: boolean;
    let interactive = false;

    if (args.includes('--yes')) {
      rebuild = true;
      console.log('⚡ Rebuild being done with --yes');
    } else if (args.includes('--no')) {
      rebuild = false;
      console.log('⚡ Skipping rebuild with --no');
    } else {
      interactive = true;
      rebuild = await promptYesNo(
        '⚠️ Do you want to DROP and RESEED the database before building? 🤔',
      );
    }

    if (rebuild) {
      console.log('ℹ️ Database will be rebuilt...');
      if (interactive) {
        console.log('💡 PRO TIP: Next time you can run `npm run build -- --yes` to skip this prompt.');
      }
      runCommand('npm run rebuild-db');
    } else {
      console.log('ℹ️ Database will NOT be rebuilt...');
      if (interactive) {
        console.log('💡 PRO TIP: Next time you can run `npm run build -- --no` to skip this prompt.');
      }
    }

    console.log('🌐 Fetching RSS feed...');
    await fetchRss();

    console.log('👷‍♀️ Building the site...');
    runCommand('next build');

    console.log('🗺️ Generating sitemap...');
    runCommand('npx tsx scripts/generate-sitemap.ts');

    console.log('\x07 🛎️ 🎉 Site build is complete! 😄');
  } catch (err) {
    console.error('❌ Error during prebuild process:', err);
    process.exit(1);
  }
})();
