import { A } from 'solid-start';
import styles from '../styles/components/Nav.module.scss';

export default function Nav() {
  return (
    <>
      <h3>The Software Supply Co.</h3>
      <p>
        <a href="/blog/donatingToFCC">We donate </a>
        to <a href="https://www.freecodecamp.org/learn/">Free Code Camp</a>.
      </p>
      <div class={styles.navContainer}>
        <A href="/">Shop</A>
        <A href="/blog">Blog</A>
        <A href="/about">About</A>
        <A href="/basket">Basket</A>
        <A href="/login">Login</A>
        <A href="/admin">Admin</A>
      </div>
    </>
  );
}
