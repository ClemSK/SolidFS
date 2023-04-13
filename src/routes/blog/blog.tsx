import { Outlet } from 'solid-start';

const BlogPostLayout = () => {
  return (
    <div>
      <h1>This is the layout component</h1>
      <Outlet />
    </div>
  );
};

export default BlogPostLayout;
