import Nav from '~/components/Nav';
import styles from './../../styles/routes/signUp.module.scss';
import FormComponent from '~/components/FormComponent';

export default function SignUp() {
  return (
    <>
      <Nav />
      <h3>
        Sign up to <i>The Software Supply Co.</i>
      </h3>
      <p>
        Thanks for taking the time to visit this site and viewing our offering.
        If you sign up we will be sending you periodic updates about where we
        are and what to expect as the product develops.
      </p>
      <div class={styles.formContainerHorizontal}>
        <div class={styles.formContainerVerical}>
          <FormComponent />
          <p>We don't spam 💩</p>
          <p>You'll just get the good stuff 🎁</p>
        </div>
      </div>
    </>
  );
}
