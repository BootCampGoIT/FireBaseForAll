import axios from 'axios';
import { setVisiblePages, clearActiveStyles } from './services';
import { home } from '../pages/home';

const API_KEY = 'AIzaSyC4-zgLXY3nFwKeDNRmp92VoFNljfDf9yw';

export const signUpUser = (user) => {
  axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, { ...user, returnSecureToken: true })
    .then(response => {
      localStorage.setItem("user", JSON.stringify({ email: response.data.email, token: response.data.idToken }));
      setVisiblePages();
      home();
      clearActiveStyles();
    })
}

export const signOutUser = () => {
  localStorage.clear();
}
