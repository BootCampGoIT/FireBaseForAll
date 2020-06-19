import { authForm } from '../authForm/authForm';
import { createListeners } from '../auth/services';

export const signIn = (props) => {
  const content = document.querySelector('.content');

  const markup = `
  <h1>SignIn</h1>
  ${authForm(props)}`
  content.innerHTML = markup;
  createListeners();



}
