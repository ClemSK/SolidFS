// import {
//   Show,
//   // Match,
//   // Switch
// } from 'solid-js';
import { A } from 'solid-start';
import { getSession } from '@auth/solid-start';
import { createServerData$ } from 'solid-start/server';
import { authOpts } from '~/routes/api/auth/[...solidauth]';
import { signIn, signOut } from '@auth/solid-start/client';
import styles from '../styles/components/Nav.module.scss';

// Getting the current session
export const useSession = () => {
  return createServerData$(
    async (_, { request }) => {
      return await getSession(request, authOpts);
    },
    { key: () => ['auth_user'] }
  );
};

export default function Nav() {
  // useSession returns a resource:
  const session = useSession();
  //   const loading = session.loading;
  //   const user = () => session()?.user;
  //   const login = () => signIn('github');
  //   const logout = () => signOut();

  console.log(
    'import.meta.env.VITE_GITHUB_ID: ',
    //  @ts-ignore
    import.meta.env.VITE_GITHUB_ID
  );
  console.log(
    'import.meta.env.VITE_GITHUB_SECRET',
    // @ts-ignore
    import.meta.env.VITE_GITHUB_SECRET
  );
  console.log('session()?.user', session()?.user);
  return (
    <>
      <h3>The Software Supply Co.</h3>
      <p>
        <a href="/blog/donatingToFCC">We donate </a>
        to{' '}
        <a href="https://www.freecodecamp.org/learn/" target="_blank">
          Free Code Camp
        </a>
        .
      </p>
      <div class={styles.navContainer}>
        <A href="/">Shop</A>
        <A href="/blog">Blog</A>
        <A href="/about">About</A>
        <A href="/basket">Basket</A>
        <A href="/login">Login</A>
        <A href="/admin">Admin</A>
      </div>
      {/* @ts-ignore */}
      {import.meta.env.VITE_GITHUB_ID} {/* @ts-ignore */}
      {import.meta.env.VITE_GITHUB_SECRET}
      {/* @ts-ignore */}
      {import.meta.env.GITHUB_SECRET}
      <nav>
        <p>You are not signed in</p>
        <button onClick={() => signIn('github')}>Sign in</button>
        <button onClick={() => signOut()}>Sign out</button>
      </nav>
      <div>
        <A href="/">Home</A>
        <A href="/protected">Protected</A>
      </div>
    </>
  );
}
