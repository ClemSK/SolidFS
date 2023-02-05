// import { APIEvent, json } from 'solid-start/api';
// import { createServerData$ } from 'solid-start/server';
// import {
//   prisma,
//   // PrismaClient,
//   // Prisma
// } from '@prisma/client';

import {
  Client,
  Pool,
  //   QueryResult,
} from 'pg';
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
// const client = new Client();
// await client.connect();

// const res = await client.query('SELECT $1::text as message', ['Hello world!']);
// console.log(res.rows[0].message); // Hello world!
await client.end();
// const prisma = new PrismaClient();

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

// export function routeData() {
//   return createServerData$(() => prisma.product.findMany());
// }

// export function routeData() {
//   // Response.redirect('/')
//   return createServerData$(() => {
//     pool.query('SELECT * FROM Products', (err, res) => {
//       if (err) {
//         return console.error('Error executing query', err.stack);
//       }
//       console.log(json(res.rows));
//       // response.status(200).json(result.rows)
//     });
//   });
// }

// export const connectToDB = async () => await pool.connect();

// module.exports = {
//   query: (
//     text: string,
//     params: any,
//     callback: (err: Error, result: QueryResult<any>) => void
//   ) => {
//     return pool.query(text, params, callback);
//   },
// };

// pool.query(text: string, values?: any[], callback?: (err?: Error, result: pg.Result)) => void

// const getUser = () => {
//   pool.query('SELECT $1::text as name', ['brianc'], (err, result) => {
//     if (err) {
//       return console.error('Error executing query', err.stack);
//     }
//     console.log(result.rows[0].name); // brianc
//   });
// };

// const getProd = (request: Request, response: Response) => {
//   pool.query('SELECT * FROM Products', (err, result) => {
//     if (err) {
//       return console.error('Error executing query', err.stack);
//       //   throw error
//     }
//     console.log(json(result.rows));
//     // response.status(200).json(result.rows)
//   });
// };

// // handles HTTP GET requests to /api/students
// export function GET(): void {
//   pool.query('SELECT * FROM Products', (err, res) => {
//     if (err) {
//       return console.error('Error executing query', err.stack);
//       //   throw error
//     }
//     console.log(json(res.rows));
//     // res.status(200).json(res.rows)
//   });
//   //   return new Response("Hello World");
// }

// export async function GET({ params }: APIEvent) {
//   console.log(`name: ${params.name}, price: ${params.price}`);
//   const students = await hogwarts.getStudents(params.house, params.year);
//   return json({ students });
// }
