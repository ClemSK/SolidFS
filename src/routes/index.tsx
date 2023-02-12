// import Trips from '~/components/Trips';
import Product from '~/components/Products';
import Nav from './../components/Nav';
import '../styles/components/Root.module.scss';
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
      <Nav />
      <Product />
      {/* <p>{data}</p> */}
    </main>
  );
}
