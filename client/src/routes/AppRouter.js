import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Alert from '../components/Alert';
import Home from '../pages/Home';
import Products from '../pages/Products';

import KC_admin from '../pages/kc-admin/KC_admin';
import Manage_clients from '../pages/kc-admin/Manage_clients';
import Manage_members from '../pages/kc-admin/Manage_members';
import Manage_products from '../pages/kc-admin/Manage_products';
import Manage_apps from '../pages/kc-admin/Manage_apps';
import Manage_errors from '../pages/kc-admin/Manage_errors';
import View_product_usage from '../pages/kc-admin/View_product_usage';
import View_app_usage from '../pages/kc-admin/View_app_usage';
import View_audits from '../pages/kc-admin/View_audits';

import Admin from '../pages/admin/Admin';
import Admin_Manage_license_keys from '../pages/admin/Manage_license_keys';
import Admin_Manage_members from '../pages/admin/Manage_members';
import Admin_View_product_usage from '../pages/admin/View_product_usage';
import Admin_View_app_usage from '../pages/admin/View_app_usage';
import Admin_View_audits from '../pages/admin/View_audits';

import Members from '../pages/members/Members';
import Member_View_product_usage from '../pages/members/View_product_usage';
import Member_View_app_usage from '../pages/members/View_app_usage';
import Member_View_audits from '../pages/members/View_audits';
import My_account from '../pages/members/My_account';

import Testing from '../pages/Testing';
import Contact from '../pages/Contact';
import Authentication from '../pages/Authentication';

import PrivateRoute from './PrivateRoute';

export const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Route exact path='/' component={Home} />
    <Alert />
    <Switch>
      <Route exact path='/products' component={Products} />

      <PrivateRoute
        exact
        path='/kc_admin'
        component={KC_admin}
        routePremissionLevel={'kiwicodes'}
      />
      <PrivateRoute
        path='/manage_clients'
        component={Manage_clients}
        routePremissionLevel={'kiwicodes'}
      />
      <PrivateRoute
        exact
        path='/manage_members'
        component={Manage_members}
        routePremissionLevel={'kiwicodes'}
      />
      <PrivateRoute
        exact
        path='/manage_products'
        component={Manage_products}
        routePremissionLevel={'kiwicodes'}
      />
      <PrivateRoute
        exact
        path='/manage_apps'
        component={Manage_apps}
        routePremissionLevel={'kiwicodes'}
      />
      <PrivateRoute
        exact
        path='/manage_errors'
        component={Manage_errors}
        routePremissionLevel={'kiwicodes'}
      />
      <PrivateRoute
        exact
        path='/view_product_usage'
        component={View_product_usage}
        routePremissionLevel={'kiwicodes'}
      />
      <PrivateRoute
        exact
        path='/view_app_usage'
        component={View_app_usage}
        routePremissionLevel={'kiwicodes'}
      />
      <PrivateRoute
        exact
        path='/view_audits'
        component={View_audits}
        routePremissionLevel={'kiwicodes'}
      />

      <PrivateRoute
        exact
        path='/admin'
        component={Admin}
        routePremissionLevel={'admin'}
      />
      <PrivateRoute
        exact
        path='/admin_Manage_license_keys'
        component={Admin_Manage_license_keys}
        routePremissionLevel={'admin'}
      />
      <PrivateRoute
        exact
        path='/admin_Manage_members'
        component={Admin_Manage_members}
        routePremissionLevel={'admin'}
      />
      <PrivateRoute
        exact
        path='/admin_view_product_usage'
        component={Admin_View_product_usage}
        routePremissionLevel={'admin'}
      />
      <PrivateRoute
        exact
        path='/admin_view_app_usage'
        component={Admin_View_app_usage}
        routePremissionLevel={'admin'}
      />
      <PrivateRoute
        exact
        path='/admin_view_audits'
        component={Admin_View_audits}
        routePremissionLevel={'admin'}
      />

      <PrivateRoute
        exact
        path='/members'
        component={Members}
        routePremissionLevel={'user'}
      />
      <PrivateRoute
        exact
        path='/member_view_product_usage'
        component={Member_View_product_usage}
        routePremissionLevel={'user'}
      />
      <PrivateRoute
        exact
        path='/member_view_app_usage'
        component={Member_View_app_usage}
        routePremissionLevel={'user'}
      />
      <PrivateRoute
        exact
        path='/member_view_audits'
        component={Member_View_audits}
        routePremissionLevel={'user'}
      />

      <Route exact path='/licensing_test' component={Testing} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/login' component={Authentication} />
      <Route exact path='/my_account' component={My_account} />
    </Switch>
    <Footer />
  </BrowserRouter>
);
export default AppRouter;
