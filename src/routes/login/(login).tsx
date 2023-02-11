import Nav from '../../components/Nav';
import styles from '../../styles/components/Login.module.scss';

export default function Login() {
  return (
    <>
      <Nav />
      <div class={styles.loginSection}>
        <div class={styles.loginContainer}>
          <label for="email">Email: </label>
          <input type="email" required name="email" />

          <label for="password">Passoword: </label>
          <input type="password" required name="password" />
          <input type="submit" value="Submit" />
        </div>
      </div>
    </>
  );
}
