import styles from '../styles/components/Root.module.scss';
import Nav from '~/components/Nav';
import { createSignal } from 'solid-js';
import sendgrid from "@sendgrid/mail";
import { createServerAction$, redirect } from 'solid-start/server';

import Product from '~/components/Products';
import { A, createRouteData } from 'solid-start';
import SignUpForm from '~/components/FormComponent';
import { Dialog } from '~/components/Dialog';
// import { boolean } from 'zod';

// define our route data, server provided data to frontend

// export function routeData() {
//   return createRouteData(async () => {
//     // fetch data from api endpoint
//     const response = await fetch('http://localhost:5173/api/products');
//     const data = await response.json();
//     return data;
//   });
// }

type FormInputEvent = InputEvent & {
  currentTarget: HTMLInputElement | HTMLTextAreaElement;
  target: Element;
};

export default function Home() {
  const [emailText, setEmailText] = createSignal<string>("");
  // const [showDialog, setShowDialog] = createSignal<boolean>(false);

  const handleInput = (event: FormInputEvent) => {
    const key = event.currentTarget.name;
    setEmailText(event.currentTarget.value);
    console.log(JSON.stringify(emailText()));
  };

  const handleSubmit = (event: any) => {
    // waiting for email sending promise to resolve before clearing the form
    setTimeout(() => {
      setEmailText(event?.target.reset());
    }, 350);
  };

  const handleDisabled = () => {
    if (emailText() !== "") {
      return false;
    } else {
      return true;
    }
  };

  const [_, { Form }] = createServerAction$(async (formData: FormData) => {
    await new Promise((resolve, reject) => setTimeout(resolve, 300));


    console.log("formData", formData);
    // @ts-ignore
    sendgrid.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY);

    async function sendEmail(formData: FormData) {
      // async function sendEmail(req: Request, res: Response, formData: FormData) {
      try {
        // console.log("REQ.BODY", req.body);
        await sendgrid.send({
          to: import.meta.env.VITE_EMAIL_TO, // Your email where you'll receive emails
          from: import.meta.env.VITE_EMAIL_FROM, // your website email address here
          subject: `Thanks for signing up to the newsletter`,
          html: `
          <h1 style='color: red'>Welcome ${formData.get('email')} 😊</h1>
          <div>You successfully signed up to the newsletter!</div>
          `,
          // subject: `${formData.get('subject')}`,
          // html: `<div>${formData.get('message')}</div>`,
        });
      } catch (error) {
        console.error(
          "error: email not sent - ", error
        );
        return error;
      }
      console.log("Email sent - success:res.status");
      // console.log(res.status);
    }
    sendEmail(formData);
    return redirect("/check-your-email");
  });


  return (
    <main class={styles.body}>
      <Nav />
      {/* <Product /> */}
      <section>
        <h2>Sign up to the newsletter</h2>
        <p>
          In the newsletter I will be sending you updates on the progress of building my idea and platform.
        </p>
        <Form class={styles.formStyles}>
          <input
            onInput={handleInput}
            name="email"
            type="email"
            placeholder='Your email'
            required
          // ! regex from MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#basic_validation
          // pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/"
          />
          <input type="submit" value="Follow the journey" onSubmit={handleSubmit}
            disabled={handleDisabled()}
          />
        </Form>
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
