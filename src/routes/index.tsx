// import Trips from '~/components/Trips';
import Product from '~/components/Products';
import styles from '../styles/components/Root.module.scss';
import { createRouteData } from 'solid-start';
import Nav from '~/components/Nav';

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
    <main class={styles.body}>
      <Nav />
      <Product />
    </main>
  );
}
