import React, { useEffect } from 'react';
import AppRouter from './routes/AppRouter';

import { LOGOUT } from './actions/types';
import { Provider } from 'react-redux';
import store from './store';

import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      console.log('here');
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
export default App;
