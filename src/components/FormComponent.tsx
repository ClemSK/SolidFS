import { Component, createSignal } from 'solid-js';
import { Form } from 'solid-start/data/Form';
import styles from './../styles/components/FormComponent.module.scss';

const FormComponent: Component<{}> = () => {
  // https://www.freecodecamp.org/news/how-to-build-a-working-contact-form-with-sendgrid-and-next-js/
  // todo: add state
  const [fullname, setFullname] = createSignal('');
  const [email, setEmail] = createSignal('');
  const [subject, setSubject] = createSignal('');
  const [message, setMessage] = createSignal('');

  // todo: add regex for checking emails
  // todo: add api call

  return (
    <>
      <Form
        class={styles.formContainer}
        //   onSubmit={handleSubmit}
      >
        <label for="fullname" class={styles.label}>
          Full name<span class={styles.label}>*</span>
        </label>
        <input
          type="text"
          name="fullname"
          class={styles.input}
          required
          value={fullname()}
          onChange={(e) => {
            setFullname((e.target as HTMLInputElement).value);
          }}
        />

        <label for="email" class={styles.label}>
          E-mail<span class="">*</span>
        </label>
        <input
          type="email"
          name="email"
          class={styles.input}
          required
          value={email()}
          onChange={(e) => {
            setEmail((e.target as HTMLInputElement).value);
          }}
        />

        <label for="subject" class={styles.label}>
          Subject<span class="">*</span>
        </label>
        <input
          type="text"
          name="subject"
          class={styles.input}
          required
          value={subject()}
          onChange={(e) => {
            setSubject((e.target as HTMLInputElement).value);
          }}
        />

        <label for="message" class={styles.label}>
          Message<span class="">*</span>
        </label>
        <textarea
          name="message"
          class={styles.textarea}
          required
          value={message()}
          onChange={(e) => {
            setMessage((e.target as HTMLTextAreaElement).value);
          }}
        />
        <div class="">
          <button class={styles.btn}>Send</button>
        </div>
      </Form>
    </>
  );
};

export default FormComponent;
