import { Client, Pool } from 'pg';

// ! the ts-ignore is used to silence an odd error from the environment variables

const client = new Client({
  // @ts-ignore
  database: import.meta.env.VITE_POSTGRES_DB,
  // @ts-ignore
  user: import.meta.env.VITE_POSTGRES_USER,
  // @ts-ignore
  host: import.meta.env.VITE_POSTGRES_HOST,
  // @ts-ignore
  port: import.meta.env.VITE_POSTGRES_PORT || 6543,
});

client
  .connect()
  .then(() => console.log('connected'))
  .catch((err) => console.error('connection error', err.stack));
await client.end();

export const pool = new Pool({
  // @ts-ignore
  database: import.meta.env.VITE_POSTGRES_DB,
  // @ts-ignore
  user: import.meta.env.VITE_POSTGRES_USER,
  // @ts-ignore
  host: import.meta.env.VITE_POSTGRES_HOST,
  // @ts-ignore
  port: import.meta.env.VITE_POSTGRES_PORT || 6543,
});
