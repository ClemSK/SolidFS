import { Component } from 'solid-js';
import styles from './../styles/components/FormComponent.module.scss';
import sendgrid from "@sendgrid/mail";
import { createServerAction$ } from 'solid-start/server';

const FormComponent: Component<{}> = () => {

  // todo: on submit, clear form 
  // todo: add regex for checking emails

  // use server actions to send a form from the server
  // otherwise it creates cors issues
  const [_, { Form }] = createServerAction$(async (formData: FormData) => {
    await new Promise((resolve, reject) => setTimeout(resolve, 1000));

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
          subject: `${formData.get('subject')}`,
          html: `<div>${formData.get('message')}</div>`,
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
  });

  return (
    <>
      <Form
        // submit handler is being handled by default by the Form component
        class={styles.formContainer}
      >
        <label for="fullname" class={styles.label}>
          Full name<span class={styles.label}>*</span>
        </label>
        <input
          type="text"
          name="fullname"
          class={styles.input}
          required
        />

        <label for="email" class={styles.label}>
          E-mail<span class="">*</span>
        </label>
        <input
          type="email"
          name="email"
          class={styles.input}
          required
        />

        <label for="subject" class={styles.label}>
          Subject<span class="">*</span>
        </label>
        <input
          type="text"
          name="subject"
          class={styles.input}
          required
        />

        <label for="message" class={styles.label}>
          Message<span class="">*</span>
        </label>
        <textarea
          name="message"
          class={styles.textarea}
          required
        />
        <div class="">
          <input
            type='submit'
            class={styles.btn}
            value='Stay informed!'
          />
        </div>
      </Form>
    </>
  );
};

export default FormComponent;
