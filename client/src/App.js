import './assets/css/App.css';
import './assets/css/Authentication.css';
import './assets/css/Product_list.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Header />
    <Route exact path='/' component={Home} />
    <Footer />
  </BrowserRouter>
);
export default App;
