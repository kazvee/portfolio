import { Client } from 'pg';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const runSqlFile = async (client: Client, filePath: string) => {
    const sql = fs.readFileSync(filePath, 'utf8');
    await client.query(sql);
};

const rebuildDb = async () => {
    const client = new Client({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || 5432),
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    });

    try {
        await client.connect();

        const createSqlPath = path.join(__dirname, '../backend/db/create.sql');
        const seedsSqlPath = path.join(__dirname, '../backend/db/seeds.sql');

        await runSqlFile(client, createSqlPath);
        await runSqlFile(client, seedsSqlPath);

        console.log('✅ Database rebuild complete.');
    } catch (err) {
        console.error('❌ Error during DB rebuild:', err);
    } finally {
        await client.end();
    }
};

rebuildDb();