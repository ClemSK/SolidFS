// routes/api/auth/[...solidauth].ts
import { SolidAuth, SolidAuthConfig } from '@auth/solid-start';
// import { SolidAuth, type SolidAuthConfig } from "@auth/solid-start"
import GitHub from '@auth/core/providers/github';
import EmailProvider from '@auth/core/providers/email';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authOpts: SolidAuthConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub({
      // @ts-ignore
      clientId: import.meta.env.VITE_GITHUB_ID,
      // @ts-ignore
      clientSecret: import.meta.env.VITE_GITHUB_SECRET,
    }),
    EmailProvider({
      server: {
        // @ts-ignore
        host: import.meta.env.EMAIL_SERVER_HOST,
        // @ts-ignore
        port: import.meta.env.EMAIL_SERVER_PORT,
        auth: {
          // @ts-ignore
          user: import.meta.env.EMAIL_SERVER_USER,
          // @ts-ignore
          pass: import.meta.env.EMAIL_SERVER_PASSWORD,
        },
      },
      // @ts-ignore
      from: import.meta.env.EMAIL_FROM,
    }),
  ],
  debug: false,
};

export const { GET, POST } = SolidAuth(authOpts);
