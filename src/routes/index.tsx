// import Trips from '~/components/Trips';
import Product from '~/components/Products';
import styles from '../styles/components/Root.module.scss';
import { A, createRouteData } from 'solid-start';
import Nav from '~/components/Nav';
import SignUpForm from '~/components/FormComponent';
import { Dialog } from '~/components/Dialog';
import { createSignal } from 'solid-js';
import { boolean } from 'zod';

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
  const [showDialog, setShowDialog] = createSignal<boolean>(false);
  return (
    <main class={styles.body}>
      <Nav />
      <Product />
      <A href="/signUp">Sign up!</A>
      <button onClick={() => {
        setShowDialog(true);
        console.log('show btn click');
      }} >Show dialog</button>
      <Dialog showDialog={showDialog()} />
      {/* <SignUpForm /> */}
    </main>
  );
}
