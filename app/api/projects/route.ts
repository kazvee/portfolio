import { NextResponse } from 'next/server';
import db from '@/backend/connection';

export async function GET() {
  try {
    const { rows } = await db.query('SELECT * FROM projects ORDER BY id ASC');
    return NextResponse.json({ projects: rows });
  } catch (error) {
    let errorMessage = 'Unknown error occurred';

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    console.error('Database error:', errorMessage);
    return NextResponse.json(
      { error: 'Failed to fetch data from the database ☹️' },
      { status: 500 },
    );
  }
}
