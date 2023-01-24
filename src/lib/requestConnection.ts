import { connectToDB } from './db';

export const handle = async ({ event, resolve }) => {
  const dbconn = connectToDB();
  event.locals = { dbconn };
  const response = await resolve(event);
  dbconn.release();
};
