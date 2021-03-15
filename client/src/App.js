import React, { useEffect } from 'react';
import AppRouter from './routes/AppRouter';

import { Provider } from 'react-redux';
import store from './store';

import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';

import './assets/css/App.css';
import './assets/css/Authentication.css';
import './assets/css/Product_list.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
export default App;
