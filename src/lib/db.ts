// import { PrismaClient, Prisma } from '@prisma/client';
import {
  // Client,
  Pool,
  QueryResult,
} from 'pg';

// const prisma = new PrismaClient();

const pool = new Pool({
  // @ts-ignore
  database: import.meta.env.VITE_POSTGRES_DB,
  // @ts-ignore
  user: import.meta.env.VITE_POSTGRES_USER,
  // @ts-ignore
  host: import.meta.env.VITE_POSTGRES_HOST,
  // @ts-ignore
  port: import.meta.env.VITE_POSTGRES_PORT || 6543,
});

export const connectToDB = async () => await pool.connect();

module.exports = {
  query: (
    text: string,
    params: any,
    callback: (err: Error, result: QueryResult<any>) => void
  ) => {
    return pool.query(text, params, callback);
  },
};
