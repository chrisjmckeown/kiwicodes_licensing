import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductAdd from '../components/KCAdmin/ManageProducts/ProductAdd';
import ProductEdit from '../components/KCAdmin/ManageProducts/ProductEdit';

import KC_admin from '../pages/KCAdmin/KC_admin';
import Manage_clients from '../pages/KCAdmin/Manage_clients';
import Manage_members from '../pages/KCAdmin/Manage_members';
import Manage_products from '../pages/KCAdmin/Manage_products';
import Manage_apps from '../pages/KCAdmin/Manage_apps';
import Manage_errors from '../pages/KCAdmin/Manage_errors';
import View_product_usage from '../pages/KCAdmin/View_product_usage';
import View_app_usage from '../pages/KCAdmin/View_app_usage';
import View_audits from '../pages/KCAdmin/View_audits';

import Admin from '../pages/Admin/Admin';
import Admin_Manage_license_keys from '../pages/Admin/Manage_license_keys';
import Admin_Manage_members from '../pages/Admin/Manage_members';
import Admin_View_product_usage from '../pages/Admin/View_product_usage';
import Admin_View_app_usage from '../pages/Admin/View_app_usage';
import Admin_View_audits from '../pages/Admin/View_audits';

import Members from '../pages/Members/Members';
import Member_View_product_usage from '../pages/Members/View_product_usage';
import Member_View_app_usage from '../pages/Members/View_app_usage';
import Member_View_audits from '../pages/Members/View_audits';
import My_account from '../pages/Members/My_account';

import Testing from '../pages/Testing';
import Contact from '../pages/Contact';
import Authentication from '../pages/Authentication';
import NotFoundPage from '../pages/NotFoundPage';
import history from './history';

import PrivateRoute from './PrivateRoute';

export const AppRouter = () => (
  <Router history={history}>
    <Header />
    <Main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={Products} />
        <PrivateRoute path='/product_edit/:id' component={ProductEdit} />
        <PrivateRoute path='/product_create' component={ProductAdd} />

        <PrivateRoute
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
          path='/manage_members'
          component={Manage_members}
          routePremissionLevel={'kiwicodes'}
        />
        <PrivateRoute
          path='/manage_products'
          component={Manage_products}
          routePremissionLevel={'kiwicodes'}
        />
        <PrivateRoute
          path='/manage_apps'
          component={Manage_apps}
          routePremissionLevel={'kiwicodes'}
        />
        <PrivateRoute
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
          path='/admin_Manage_license_keys'
          component={Admin_Manage_license_keys}
          routePremissionLevel={'admin'}
        />
        <PrivateRoute
          path='/admin_Manage_members'
          component={Admin_Manage_members}
          routePremissionLevel={'admin'}
        />
        <PrivateRoute
          path='/admin_view_product_usage'
          component={Admin_View_product_usage}
          routePremissionLevel={'admin'}
        />
        <PrivateRoute
          path='/admin_view_app_usage'
          component={Admin_View_app_usage}
          routePremissionLevel={'admin'}
        />
        <PrivateRoute
          path='/admin_view_audits'
          component={Admin_View_audits}
          routePremissionLevel={'admin'}
        />

        <PrivateRoute
          path='/members'
          component={Members}
          routePremissionLevel={'user'}
        />
        <PrivateRoute
          path='/member_view_product_usage'
          component={Member_View_product_usage}
          routePremissionLevel={'user'}
        />
        <PrivateRoute
          path='/member_view_app_usage'
          component={Member_View_app_usage}
          routePremissionLevel={'user'}
        />
        <PrivateRoute
          path='/member_view_audits'
          component={Member_View_audits}
          routePremissionLevel={'user'}
        />

        <Route path='/licensing_test' component={Testing} />
        <Route path='/contact' component={Contact} />
        <Route path='/login' component={Authentication} />
        <Route path='/my_account' component={My_account} />
        <Route component={NotFoundPage} />
      </Switch>
    </Main>
    <Footer />
  </Router>
);
export default AppRouter;
