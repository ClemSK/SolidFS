import { Component } from "solid-js";
import Nav from "~/components/Nav";

const CheckYourEmail: Component<{}> = () => {

  return (
    <>
      <Nav />
      <h1>More info about the newsletter</h1>
      <h3>What to expect from the newsletter</h3>
      <ul>
        <li>types of emails</li>
        <li>reminders of social links</li>
        <li>highlight content for users: the blog</li>
        <li>sign off - Clem</li>
        <li>
          <a href="https://jamesclear.com/check-your-email?3-2-1">Atomic habits example</a>
        </li>
      </ul>
    </>
  );
};

export default CheckYourEmail;