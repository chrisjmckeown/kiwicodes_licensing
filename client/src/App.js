import React, { useEffect } from 'react';
import AppRouter from './routes/AppRouter';

import { LOGOUT } from './actions/types';
import { Provider } from 'react-redux';
import store from './store';

import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/authActions';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
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
