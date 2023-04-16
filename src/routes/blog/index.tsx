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
  // todo: sort by last created date:
  // todo: https://www.agirl.codes/sort-nextjs-blog-posts-by-date
  return createRouteData(async () => {
    const files = import.meta.glob('./posts/*.mdx');
    console.log('files', files);
    const posts = Object.keys(files).map(async (file) => {
      const slug = file.replace('./posts/', '').replace('.mdx', '');
      const meta = await files[file]();
      console.log('slug', slug);
      console.log('meta', meta);
      return { slug, ...((await meta) as Meta) };
    });
    console.log('posts:createRouteData', posts);
    return Promise.all(posts);
  });
};

export default function Blog() {
  const usePosts = useRouteData<typeof routeData>();
  console.log('posts:useRouteData', usePosts);
  return (
    <>
      <main>
        <Nav />
        <h1>This is the blog home section</h1>
      </main>
      <section class={styles.sectionStyles}>
        <div class={styles.blogPostContainer}>
          <For each={usePosts()}>
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
