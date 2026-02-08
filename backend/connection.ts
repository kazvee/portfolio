import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const db = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
});

db.query('SELECT NOW()')
  .then(() => console.log('😄 Connected to the database!'))
  .catch((err) => console.error('☹️ Database connection error:', err));

export default db;
