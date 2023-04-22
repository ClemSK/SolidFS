import { For } from 'solid-js';
import { A, createRouteData, useRouteData } from 'solid-start';
import Nav from '~/components/Nav';
import styles from './../../styles/components/Blog.module.scss';

type Meta = {
  title: string;
  date: string;
  description: string;
  thumbnailUrl: string;
};

export const routeData = () => {
  return createRouteData(async () => {
    const files = import.meta.glob('./posts/*.mdx');
    const posts = Object.keys(files).map(async (file) => {
      const slug = file.replace('./posts/', '').replace('.mdx', '');
      const meta = await files[file]();
      return { slug, ...((await meta) as Meta) };
    });
    return Promise.all(posts);
  });
};

export default function Blog() {
  const Posts = useRouteData<typeof routeData>();
  console.log('Posts(): ', Posts());

  const dates = [
    { title: 'hello # 3', date: 'April 13, 2023' },
    { title: 'hello # 6', date: 'April 16, 2023' },
    { title: 'hello # 2', date: 'April 12, 2023' },
    { title: 'hello # 5', date: 'April 15, 2023' },
    { title: 'hello # 4', date: 'April 14, 2023' }];

  const sortedDates = dates.sort((a, b) => {
    const beforeDate = Date.parse(a.date);
    const afterDate = Date.parse(b.date);

    return afterDate - beforeDate;
  });

  console.log('sortedDates:(blog).tsx', sortedDates);

  /*
output: 

0: Object { date: "April 16, 2023", … }
1: Object { date: "April 15, 2023", … }
2: Object { date: "April 14, 2023", … }
3: Object { date: "April 13, 2023", … }
4: Object { date: "April 12, 2023", … }
  */

  const sortedPosts = Posts()?.sort((a, b) => {
    const beforeDate = Date.parse(a.date);
    const afterDate = Date.parse(b.date);

    return afterDate - beforeDate;
  });

  console.log('sortedPosts:(blog).tsx', sortedPosts);

  /*
output: 

0: Object { date: "April 12, 2023", … }
1: Object { date: "April 13, 2023", … }
2: Object { date: "April 14, 2023", … }
3: Object { date: "April 15, 2023", … }
4: Object { date: "April 16, 2023" … }
*/

  return (
    <>
      <main>
        <Nav />
        <h1>This is the blog home section</h1>
      </main>
      <section class={styles.sectionStyles}>
        <div class={styles.blogPostContainer}>
          <For each={Posts()}>
            {(post) => (
              <A href={`posts/${post.slug}`}>
                <div class={styles.blogPosts}>
                  <div>
                    <img
                      src={post.thumbnailUrl}
                      alt="thumbnail"
                      loading="lazy"
                      height="200"
                      width="300"
                    />
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                  <p>{post.date}</p>                </div>
              </A>
            )}
          </For>
        </div>
      </section>
    </>
  );
}
