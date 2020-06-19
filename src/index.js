import './styles.css';
import { signUp } from './components/pages/signUp';
import { signIn } from './components/pages/signIn';
import { home } from './components/pages/home';
import { signOutUser } from './components/auth/services';
import { setVisiblePages, clearActiveStyles } from './components/auth/services';

const list = document.querySelector('.list');
const activePage = document.querySelector('.listItem');
activePage.classList.add('listItemActive');
home();
setVisiblePages();
  
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
      signUp(e.target.dataset.page);
      break;

    case 'signin':
      signIn(e.target.dataset.page);
      break;

    case 'signout':
      setVisiblePages();
      signOutUser();
      home();
      clearActiveStyles()
      break;

    default:
      break;
  }
}

list.addEventListener('click', getPage)
