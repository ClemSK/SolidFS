// routes/api/auth/[...solidauth].ts
import { SolidAuth, SolidAuthConfig } from '@auth/solid-start';
// import { SolidAuth, type SolidAuthConfig } from "@auth/solid-start"
import GitHub from '@auth/core/providers/github';

export const authOpts: any = {
  providers: [
    GitHub({
      // @ts-ignore
      clientId: import.meta.env.VITE_GITHUB_ID,
      // @ts-ignore
      clientSecret: import.meta.env.VITE_GITHUB_SECRET,
    }),
  ],
  debug: false,
};

export const { GET, POST } = SolidAuth(authOpts);
