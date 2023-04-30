import {
  SolidAuth,
  // SolidAuthConfig
} from '@auth/solid-start';
import GitHub from '@auth/core/providers/github';
import {
  Email,
  SendVerificationRequestParams,
} from '@auth/core/providers/email';
import { Provider } from '@auth/core/providers';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import GoogleProvider from 'next-auth/providers/google';
// import nodemailer from 'nodemailer'
const prisma = new PrismaClient();

// const generateVerificationToken = (
//   params: SendVerificationRequestParams
// ): SendVerificationRequestParams => {
//   //   return console.log('authentication test');

//   // SendVerificationRequestParams are
//   //   identifier: string
//   //   url: string
//   //   expires: Date
//   //   provider: EmailConfig
//   //   token: string
//   //   theme: Theme
//   identifier: 'this';
//   url:;
//   expires:;
//   provider:;
//   token:;
//   theme:;
// };

export const authOpts: any = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub({
      // @ts-ignore
      clientId: import.meta.env.VITE_GITHUB_ID,
      // @ts-ignore
      clientSecret: import.meta.env.VITE_GITHUB_SECRET,
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    // Email({
    //   type: 'email',
    //   sendVerificationRequest: generateVerificationToken(),
    //   id: '123',
    //   name: 'clem',
    //   server: {
    //     // @ts-ignore
    //     host: import.meta.env.VITE_EMAIL_SERVER_HOST,
    //     // @ts-ignore
    //     port: import.meta.env.VITE_EMAIL_SERVER_PORT,
    //     auth: {
    //       // @ts-ignore
    //       user: import.meta.env.VITE_EMAIL_SERVER_USER,
    //       // @ts-ignore
    //       pass: import.meta.env.VITE_EMAIL_SERVER_PASSWORD,
    //     },
    //   },
    //   // @ts-ignore
    //   from: import.meta.env.VITE_EMAIL_FROM,
    // }),
  ],
  debug: false,
};

// async function sendVerificationRequest({
//   identifier: email,
//   url,
//   provider: { server, from },
// }) {
//   const { host } = new URL(url)
//   const transport = nodemailer.createTransport(server)
//   await transport.sendMail({
//     to: email,
//     from,
//     subject: `Sign in to ${host}`,
//     text: text({ url, host }),
//     html: html({ url, host, email }),
//   })
// }

export const { GET, POST } = SolidAuth(authOpts);
