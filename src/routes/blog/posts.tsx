import { A, Outlet } from 'solid-start';
import styles from './../../styles/components/BlogPostLayout.module.scss';
import Nav from '~/components/Nav';

// Rendering the matched child route component inside a layout route component
// https://start.solidjs.com/api/Outlet

const BlogPostLayout = () => {
  return (
    <div class={styles.border}>
      <Nav />
      <A href="/blog">Back</A>
      <Outlet />
    </div>
  );
};

export default BlogPostLayout;
