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
    // importing mdx files
    const files = import.meta.glob('./posts/*.mdx');
    // mapping over posts
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

  const sortedPosts = () => {
    const posts = Posts() || [];

    return posts.slice().sort((a, b) => {
      // sort: last published date at the top
      return Date.parse(b.date) - Date.parse(a.date);
    });
  };

  return (
    <>
      <main>
        <Nav />
        <h1>This is the blog home section</h1>
      </main>
      <section class={styles.sectionStyles}>
        <div class={styles.blogPostContainer}>
          <For each={sortedPosts()}>
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
                  <p>{post.date}</p>
                </div>
              </A>
            )}
          </For>
        </div>
      </section>
    </>
  );
}