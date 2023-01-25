import { createServerData$ } from 'solid-start/server';
import Counter from '~/components/Counter';
import './index.css';
// import db, { getProductById } from '~/lib/db';
import server$ from 'solid-start/server';
// export let Buffer = require('buffer').Buffer;
// export let process = require('process/browser');
// import { useRouteData } from 'solid-start';
// import { Show } from 'solid-js';

export default function Home() {
  //   createServerData$(db.getProducts, { initialValue: [] });

  //   createServerData$(() => getProductById);
  //   createServerData$(() => getProductById, { initialValue: [] });
  //   db.getProducts;
  //   console.log('db.getProducts', db.getProducts);
  //   const products = useRouteData<typeof routeData>();
  //   console.log(products);

  //   console.log(
  //     'import.meta.env.VITE_POSTGRES_DB',
  //     // @ts-ignore
  //     import.meta.env.VITE_POSTGRES_DB
  //   );
  //   @ts-ignore
  console.log('import.meta.env.test_env: ', import.meta.env.VITE_POSTGRES_HOST);

  return (
    <main>
      {/* @ts-ignore */}
      <h1>Hello world! {import.meta.env.VITE_POSTGRES_HOST}</h1>
      <h2>something else</h2>
      <Counter />
      <p>
        Visit{' '}
        <a href="https://solidjs.com" target="_blank">
          solidjs.com
        </a>{' '}
        to learn how to build Solid apps.
      </p>
    </main>
    // <div>hello</div>
  );
}
