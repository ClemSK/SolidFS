import { Component, createSignal } from 'solid-js';
import styles from './../styles/components/FormComponent.module.scss';
import sendgrid from "@sendgrid/mail";
import { createServerAction$, redirect } from 'solid-start/server';
import { type } from 'os';
interface IForm {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

type FormInputEvent = InputEvent & {
  currentTarget: HTMLInputElement | HTMLTextAreaElement;
  target: Element;
};

const FormComponent: Component<{}> = () => {

  const [form, setForm] = createSignal<IForm>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInput = (event: FormInputEvent) => {
    const key = event.currentTarget.name;
    setForm({ ...form(), [key]: event.currentTarget.value });
    console.log(JSON.stringify(form()));
  };

  const handleSubmit = (event: any) => {
    // waiting for email sending promise to resolve before clearing the form
    setTimeout(() => {
      setForm({
        fullName: event?.target.reset(),
        email: event?.target.reset(),
        subject: event?.target.reset(),
        message: event?.target.reset(),
      });
    }, 350);
  };

  const handleDisabled = () => {
    if (form().fullName !== "" &&
      form().email !== "" &&
      form().subject !== "" &&
      form().message !== "") {
      return false;
    } else {
      return true;
    }
  };

  // todo: on submit, clear form 
  // todo: add regex for checking emails

  // use server actions to send a form from the server
  // otherwise it creates cors issues
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
    // return redirect("/blog");
  });

  return (
    <>
      <Form
        // submit handler is being handled by default by the Form component
        class={styles.formContainer}
        onSubmit={handleSubmit}
      >
        <label for="fullName" class={styles.label}>
          Full name<span class={styles.label}>*</span>
        </label>
        <input
          type="text"
          name="fullName"
          class={styles.input}
          required
          // the key gets the name of the input and means that we only need to write this function once
          onInput={handleInput}
        />

        <label for="email" class={styles.label}>
          E-mail<span class="">*</span>
        </label>
        <input
          type="email"
          name="email"
          class={styles.input}
          required
          onInput={handleInput}
        />

        <label for="subject" class={styles.label}>
          Subject<span class="">*</span>
        </label>
        <input
          type="text"
          name="subject"
          class={styles.input}
          required
          onInput={handleInput}
        />

        <label for="message" class={styles.label}>
          Message<span class="">*</span>
        </label>
        <textarea
          name="message"
          class={styles.textarea}
          required
          onInput={handleInput}
        />
        <div class="">
          <input
            type='submit'
            class={styles.btn}
            value='Stay informed!'
            onSubmit={handleSubmit}
            disabled={handleDisabled()}
          />
        </div>
      </Form>
    </>
  );
};

export default FormComponent;
