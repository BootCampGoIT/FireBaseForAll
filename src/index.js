import './styles.css';
import { signUp } from './components/pages/signUp';
import { signIn } from './components/pages/signIn';
import { home } from './components/pages/home';

const list = document.querySelector('.list');
const activePage = document.querySelector('.listItem');
activePage.classList.add('listItemActive');
home();

const getPage = (e) => {
  if (e.target === e.currentTarget) {
    return
  }

  const activePage = document.querySelector('.listItemActive');
  activePage.classList.remove('listItemActive');
  e.target.classList.add('listItemActive');

  switch (e.target.dataset.page) {
    case 'home':
      home();
      break;

    case 'signup':
      signUp(e.target.dataset.page)
      break;

    case 'signin':
      signIn(e.target.dataset.page)
      break;

    case 'signout':
      break;

    default:
      break;
  }






}




list.addEventListener('click', getPage)
