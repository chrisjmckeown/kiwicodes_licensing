import './assets/css/App.css';
import './assets/css/Authentication.css';
import './assets/css/Product_list.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Products from './components/pages/Products';

import KC_admin from './components/pages/kc-admin/KC_admin';
import Manage_clients from './components/pages/kc-admin/Manage_clients';
import Manage_members from './components/pages/kc-admin/Manage_members';
import Manage_products from './components/pages/kc-admin/Manage_products';
import Manage_apps from './components/pages/kc-admin/Manage_apps';
import Manage_errors from './components/pages/kc-admin/Manage_errors';
import View_product_usage from './components/pages/kc-admin/View_product_usage';
import View_app_usage from './components/pages/kc-admin/View_app_usage';
import View_audits from './components/pages/kc-admin/View_audits';

import Admin from './components/pages/admin/Admin';
import Admin_Manage_license_keys from './components/pages/admin/Manage_license_keys';
import Admin_Manage_members from './components/pages/admin/Manage_members';
import Admin_View_product_usage from './components/pages/admin/View_product_usage';
import Admin_View_app_usage from './components/pages/admin/View_app_usage';
import Admin_View_audits from './components/pages/admin/View_audits';

import Members from './components/pages/members/Members';
import Member_View_product_usage from './components/pages/members/View_product_usage';
import Member_View_app_usage from './components/pages/members/View_app_usage';
import Member_View_audits from './components/pages/members/View_audits';
import Members_area from './components/pages/members/Members_area';
import My_account from './components/pages/members/My_account';

import Testing from './components/pages/Testing';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Header />
    <Route exact path='/' component={Home} />
    <Switch>
      <Route exact path='/products' component={Products} />

      <Route exact path='/kc_admin' component={KC_admin} />
      <Route exact path='/manage_clients' component={Manage_clients} />
      <Route exact path='/manage_members' component={Manage_members} />
      <Route exact path='/manage_products' component={Manage_products} />
      <Route exact path='/manage_apps' component={Manage_apps} />
      <Route exact path='/manage_errors' component={Manage_errors} />
      <Route exact path='/view_product_usage' component={View_product_usage} />
      <Route exact path='/view_app_usage' component={View_app_usage} />
      <Route exact path='/view_audits' component={View_audits} />

      <Route exact path='/admin' component={Admin} />
      <Route
        exact
        path='/admin_Manage_license_keys'
        component={Admin_Manage_license_keys}
      />
      <Route
        exact
        path='/admin_Manage_members'
        component={Admin_Manage_members}
      />
      <Route
        exact
        path='/admin_view_product_usage'
        component={Admin_View_product_usage}
      />
      <Route
        exact
        path='/admin_view_app_usage'
        component={Admin_View_app_usage}
      />
      <Route exact path='/admin_view_audits' component={Admin_View_audits} />

      <Route exact path='/members' component={Members} />
      <Route
        exact
        path='/member_view_product_usage'
        component={Member_View_product_usage}
      />
      <Route
        exact
        path='/member_view_app_usage'
        component={Member_View_app_usage}
      />
      <Route exact path='/member_view_audits' component={Member_View_audits} />

      <Route exact path='/licensing_test' component={Testing} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/members_area' component={Members_area} />
      <Route exact path='/my_account' component={My_account} />
    </Switch>
    <Footer />
  </BrowserRouter>
);
export default App;
