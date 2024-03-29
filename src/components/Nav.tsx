import { A } from 'solid-start';
import { getSession } from '@auth/solid-start';
import { createServerData$ } from 'solid-start/server';
import { authOpts } from '~/routes/api/auth/[...solidauth]';
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

  return (
    <>
      <div class={styles.titleLoginBasketSection}>
        <h3>The Software Supply Co.</h3>

        <div class={styles.loginAndBasketContainer}>
          {/* <a href="/login">Login</a> */}
          {/* <a href="/basket">Basket</a> */}
        </div>
      </div>

      <div class={styles.navContainer}>
        <A href="/">Home</A>
        <A href="/blog">Blog</A>
        <A href="/about">About</A>
        {/* <A href="/protected">Protected</A> */}
        {/* <A href="/admin">Admin</A> */}
      </div>
      <p>
        <a href="/blog/posts/donatingToFCC">We donate </a>
        to{' '}
        <a href="https://www.freecodecamp.org/learn/" target="_blank">
          Free Code Camp
        </a>
        .
      </p>
      <div></div>
    </>
  );
}
