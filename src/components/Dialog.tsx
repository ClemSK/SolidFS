import { Component, JSXElement } from 'solid-js';

interface Props {
  showDialog: boolean;
}

export const Dialog = (props: Props): JSXElement => {

  if (!props.showDialog) {
    return null;
  }

  return (
    <>
      <dialog open>
        <p>Greetings, one and all!</p>
        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>

    </>
  );
};




