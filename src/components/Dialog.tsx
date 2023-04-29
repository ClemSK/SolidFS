import {
  // Component, 
  JSXElement
} from 'solid-js';
import FormComponent from './FormComponent';
import { Portal } from 'solid-js/web';

interface Props {
  showDialog: boolean;
  onClose: boolean;
}

export const Dialog = (props: Props): JSXElement => {

  return (
    <>
      <Portal>
        <dialog open>
          <form method="dialog">
            <button
              onClick={() => props.onClose}
            >X</button>
          </form>
          <p>Greetings, one and all!</p>
          <FormComponent />
        </dialog>
      </Portal>

    </>
  );
};




