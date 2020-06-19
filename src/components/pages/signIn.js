import { authForm } from '../authForm/authForm';

export const signIn = (props) => {
  const content = document.querySelector('.content');

  const markup = `
  <h1>SignIn</h1>
  ${authForm(props)}`
  content.innerHTML = markup;
  


}
