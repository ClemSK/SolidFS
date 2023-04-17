import { Component, createSignal } from 'solid-js';
import styles from './../styles/components/FormComponent.module.scss';
import { createRouteAction, redirect } from 'solid-start';
import sendgrid from "@sendgrid/mail";
// import { Form } from 'solid-start/data/Form';

const FormComponent: Component<{}> = () => {
  // https://www.freecodecamp.org/news/how-to-build-a-working-contact-form-with-sendgrid-and-next-js/
  // todo: add state
  // const [fullname, setFullname] = createSignal('');
  // const [email, setEmail] = createSignal('');
  // const [subject, setSubject] = createSignal('');
  // const [message, setMessage] = createSignal('');

  // todo: add regex for checking emails
  // todo: add api call

  // const handleSubmit = async (e: { preventDefault: () => void; }) => {
  //   e.preventDefault();

  //   // let isValidForm = handleValidation();


  //   const res = await fetch("/api/sendgrid", {
  //     body: JSON.stringify({
  //       email: email,
  //       fullname: fullname,
  //       subject: subject,
  //       message: message,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     method: "POST",
  //   });

  //   const { error } = await res.json();
  //   if (error) {
  //     console.log(error);
  //     return;
  //   }
  //   console.log(fullname, email, subject, message);
  // };


  // @ts-ignore
  sendgrid.setApiKey(import.meta.env.SENDGRID_API_KEY);



  const [_, { Form }] = createRouteAction(async (formData: FormData) => {
    await new Promise((resolve, reject) => setTimeout(resolve, 500));

    console.log("formData", formData);

    // const fullname = formData.get("fullname");
    //   if (resolve !== null) {
    //     // if (username === "admin") {
    //     return redirect("/");
    //   } else {
    //     // console.log(reject);
    //     throw new Error("Invalid username");
    // }
    //   // return redirect("/home");
    async function sendEmail(formData: FormData) {
      // async function sendEmail(req: Request, res: Response, formData: FormData) {
      try {
        // console.log("REQ.BODY", req.body);
        await sendgrid.send({
          to: "bluechipdevs@outlook.com", // Your email where you'll receive emails
          from: "clemskyn@gmail.com", // your website email address here
          subject: `${formData.get('subject')}`,
          // subject: `${req.body}`,
          // subject: `${req.body.subject}`,
          html: `<div>${formData.get('message')}</div>`,
        });
      } catch (error) {
        console.error(
          "error: email not sent - ", error
          // "error:res.status: ", res.status,
          // "error message: ", err.message
        );
        return error;
        // return res.status;
        // return res.status(500);
        // return res.status(res.status || 500).json({ error: err.message });
      }

      console.log("success:res.status");
      // console.log("success:res.status: ", res.status);
      // return res.status;
      // return res.status(200).json({ error: "" });
    }

    sendEmail(formData);

  });

  return (
    <>
      <Form
        class={styles.formContainer}
      // onSubmit={e => sendEmail(formData)}
      >
        <label for="fullname" class={styles.label}>
          Full name<span class={styles.label}>*</span>
        </label>
        <input
          type="text"
          name="fullname"
          class={styles.input}
          required
        // value={fullname()}
        // onChange={(e) => {
        //   setFullname((e.target as HTMLInputElement).value);
        // }}
        />

        <label for="email" class={styles.label}>
          E-mail<span class="">*</span>
        </label>
        <input
          type="email"
          name="email"
          class={styles.input}
          required
        // value={email()}
        // onChange={(e) => {
        //   setEmail((e.target as HTMLInputElement).value);
        // }}
        />

        <label for="subject" class={styles.label}>
          Subject<span class="">*</span>
        </label>
        <input
          type="text"
          name="subject"
          class={styles.input}
          required
        // value={subject()}
        // onChange={(e) => {
        //   setSubject((e.target as HTMLInputElement).value);
        // }}
        />

        <label for="message" class={styles.label}>
          Message<span class="">*</span>
        </label>
        <textarea
          name="message"
          class={styles.textarea}
          required
        // value={message()}
        // onChange={(e) => {
        //   setMessage((e.target as HTMLTextAreaElement).value);
        // }}
        />
        <div class="">
          <input type='submit' class={styles.btn} value='Sign up!' />
        </div>
      </Form>
    </>
  );
};

export default FormComponent;
