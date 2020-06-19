import { signUpUser, signInUser } from "./authServices";

const user = {
  email: "",
  password: ""
}

const getUserInfo = (e) => {
  user[e.target.name] = e.target.value;

  // switch (e.target.name) {
  //   case 'password':
  //     if (e.target.value.length < 6) {
  //       document.querySelector('[data-autherror="password"]').innerText = "password < 6 "
  //     } else document.querySelector('[data-autherror="password"]').innerText = ""
  //     break;
  //   default:
  //     break;
  // }
}

export const setVisiblePages = () => {
  if (localStorage.getItem("user")) {
    document.querySelector('[data-page="signout"]').classList.toggle('unvisible')
    document.querySelector('[data-page="signin"]').classList.toggle('unvisible')
    document.querySelector('[data-page="signup"]').classList.toggle('unvisible');

  }
}

export const clearActiveStyles = () => {
  document.querySelector('.listItemActive').classList.remove('listItemActive');
  const activePage = document.querySelector('.listItem');
  activePage.classList.add('listItemActive');
}

const submitForm = (e) => {
  e.preventDefault();

  e.target.submitButton.dataset.loginbutton === 'signup'
    ? signUpUser(user)
    : signInUser(user)

  document.forms.authForm.reset();
  user.email = "";
  user.password = "";
}

export const createListeners = () => {
  const authForm = document.forms.authForm;
  authForm.addEventListener('input', getUserInfo);
  authForm.addEventListener('submit', submitForm);
}
export const signOutUser = () => {
  localStorage.clear();
}
