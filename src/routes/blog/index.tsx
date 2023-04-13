import { createRouteData, useRouteData } from 'solid-start';
import Nav from '../../components/Nav';

type Meta = {
  title: string;
  date: string;
  description: string;
  thimnbailUrl: string;
};

export const routeData = () => {
  return createRouteData(async () => {
    const files = import.meta.glob('./blog/*.mdx');
    console.log('files', files);
    const posts = Object.keys(files).map(async (file) => {
      const slug = file.replace('./blog/', '').replace('mdx', '');
      const meta = await files[file]();

      return { slug, ...((await meta) as Meta) };
    });
    return Promise.all(posts);
  });
};

export default function Blog() {
  const posts = useRouteData<typeof routeData>();
  console.log('posts', posts);
  return (
    <main>
      <Nav />
      <h1>This is the blog home section</h1>
    </main>
  );
}
