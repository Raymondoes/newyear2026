// Sorry lads, this won't be used, because I was running out of time.

import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

let db: Database<sqlite3.Database, sqlite3.Statement>;

export async function initDB() {
  db = await open({
    filename: './schema.sqlite',
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL
    );
  `);

  console.log('SQLite database connected');
}

export function getDB() {
  if (!db) {
    throw new Error('Database not initialized');
  }
  return db;
}
