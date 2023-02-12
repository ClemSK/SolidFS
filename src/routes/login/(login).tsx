import Nav from '../../components/Nav';
import styles from '../../styles/components/Login.module.scss';
import { useSession } from '../../components/Nav';
import { signIn, signOut } from '@auth/solid-start/client';
import { Show } from 'solid-js';

export default function Login() {
  const session = useSession();
  return (
    <>
      <Nav />

      <div class={styles.loginSection}>
        <div class={styles.loginContainer}>
          <Show
            when={session()?.user}
            keyed
            fallback={
              <>
                <div class={styles.loginTextAndButton}>
                  <p>You are not signed in</p>
                  <button onClick={() => signIn('github')}>Sign in</button>
                </div>
              </>
            }
          >
            {(us) => (
              <>
                <div>
                  <Show when={us.image} keyed>
                    {(im) => <img src={im} height="300" width="300" />}
                  </Show>
                  <div class={styles.loginTextAndButton}>
                    <h3>Hello</h3>
                    <p>{us.name}</p>
                  </div>
                </div>
                <button onClick={() => signOut()}>Sign out</button>
              </>
            )}
          </Show>
          {/* <label for="email">Email: </label>
          <input type="email" required name="email" />

          <label for="password">Passoword: </label>
          <input type="password" required name="password" />
          <input type="submit" value="Submit" /> */}
        </div>
      </div>
    </>
  );
}
