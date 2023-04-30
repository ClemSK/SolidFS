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

// export function routeData() {
//   return createRouteData(async () => {
//     // fetch data from api endpoint
//     const response = await fetch('http://localhost:5173/api/products');
//     const data = await response.json();
//     return data;
//   });
// }



export default function Home() {
  const [emailText, setEmailState] = createSignal<string>("");
  console.log('emailText', emailText);
  console.log("setEmailState", setEmailState);
  // const [showDialog, setShowDialog] = createSignal<boolean>(false);
  return (
    <main class={styles.body}>
      <Nav />
      {/* <Product /> */}
      <section>
        <h2>Sign up to the newsletter</h2>
        <p>
          In the newsletter I will be sending you updates on the progress of building my idea and platform.
        </p>
        <div>
          <div>Input: {emailText()}</div>
          <input type="text" placeholder='Email' onInput={(event) => {
            console.log(event.currentTarget.value);
          }} />
          <input type="submit" value="Follow the journey" onSubmit={() => setEmailState("")} />
        </div>
      </section>
      {/* <A href="/signUp">Sign up!</A> */}
      {/* <button onClick={() => setShowDialog(true)}>Sign up 🚀</button>
      {(showDialog() === true) &&
        <Dialog
          onClose={setShowDialog(false)}
          showDialog={showDialog()} />
      } */}
      {/* <SignUpForm /> */}
    </main >
  );
}
