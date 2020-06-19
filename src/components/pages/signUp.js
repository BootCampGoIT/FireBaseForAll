import { authForm } from '../authForm/authForm';
import { createListeners } from '../auth/services';



export const signUp = (props) => {
  const content = document.querySelector('.content');

  const markup = `
  <h1>SignUp</h1>
  ${authForm(props)}
  `
  content.innerHTML = markup;

  createListeners();
}
