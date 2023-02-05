import Counter from '~/components/Counter';
// import Trips from '~/components/Trips';
import Product from '~/components/Product';
import './index.css';
import { createRouteData } from 'solid-start';

// define our route data, server provided data to frontend
export function routeData() {
  return createRouteData(async () => {
    // fetch data from api endpoint
    const response = await fetch('http://localhost:5173/api/products');
    const data = await response.json();
    return data;
  });
}
export default function Home() {
  return (
    <main>
      <h2>something else</h2>
      <Counter />
      {/* <Trips /> */}
      <Product />
      <p>
        Visit{' '}
        <a href="https://solidjs.com" target="_blank">
          solidjs.com
        </a>{' '}
        to learn how to build Solid apps.
      </p>
      {/* <p>{data}</p> */}
    </main>
    // <div>hello</div>
  );
}
