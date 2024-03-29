import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Apps from '../components/Apps/ProductAppList';
import AppChat from '../components/AppChat/AppChatList';
import ProductBuild from '../components/ProductBuild/ProductBuildList';

import KC_admin from '../pages/KCAdmin/KC_admin';
import Manage_clients from '../pages/KCAdmin/Manage_clients';
import Manage_builds from '../pages/KCAdmin/Manage_builds';
import Manage_licensekeys from '../pages/KCAdmin/Manage_licensekeys';
import Manage_members from '../pages/KCAdmin/Manage_members';
import Manage_products from '../pages/KCAdmin/Manage_products';
import Manage_apps from '../pages/KCAdmin/Manage_apps';
import Manage_errors from '../pages/KCAdmin/Manage_errors';
import View_product_usage from '../pages/KCAdmin/View_product_usage';
import View_app_usage from '../pages/KCAdmin/View_app_usage';
import View_audits from '../pages/KCAdmin/View_audits';

import Admin_Page from '../pages/admin/Admin_Page';
import Admin_Manage_license_keys from '../pages/admin/Manage_license_keys';
import Admin_Manage_members from '../pages/admin/Manage_members';
import Admin_View_product_usage from '../pages/admin/View_product_usage';
import Admin_View_app_usage from '../pages/admin/View_app_usage';
import Admin_View_audits from '../pages/admin/View_audits';

import Members_Page from '../pages/members/Members_Page';
import Member_View_product_usage from '../pages/members/View_product_usage';
import Member_View_app_usage from '../pages/members/View_app_usage';
import Member_View_audits from '../pages/members/View_audits';
import My_account from '../pages/members/My_account';

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
        <Route exact path='/products/app/:id' component={Apps} />
        <Route exact path='/products/build/:id' component={ProductBuild} />
        <Route exact path='/apps/chat/:id' component={AppChat} />

        <PrivateRoute path='/kc_admin' component={KC_admin} />
        <PrivateRoute path='/manage_builds' component={Manage_builds} />
        <PrivateRoute path='/manage_clients' component={Manage_clients} />
        <PrivateRoute
          path='/Manage_licensekeys'
          component={Manage_licensekeys}
        />
        <PrivateRoute path='/manage_members' component={Manage_members} />
        <PrivateRoute path='/manage_products' component={Manage_products} />
        <PrivateRoute path='/manage_apps' component={Manage_apps} />
        <PrivateRoute path='/manage_errors' component={Manage_errors} />
        <PrivateRoute
          exact
          path='/view_product_usage'
          component={View_product_usage}
        />
        <PrivateRoute exact path='/view_app_usage' component={View_app_usage} />
        <PrivateRoute path='/kcadmin_view_audits' component={View_audits} />

        <PrivateRoute exact path='/admin' component={Admin_Page} />
        <PrivateRoute
          path='/admin_manage_licensekeys'
          component={Admin_Manage_license_keys}
        />
        <PrivateRoute
          path='/admin_manage_members'
          component={Admin_Manage_members}
        />
        <PrivateRoute
          path='/admin_view_product_usage'
          component={Admin_View_product_usage}
        />
        <PrivateRoute
          path='/admin_view_app_usage'
          component={Admin_View_app_usage}
        />
        <PrivateRoute path='/admin_view_audits' component={Admin_View_audits} />

        <PrivateRoute path='/members' component={Members_Page} />
        <PrivateRoute
          path='/member_view_product_usage'
          component={Member_View_product_usage}
        />
        <PrivateRoute
          path='/member_view_app_usage'
          component={Member_View_app_usage}
        />
        <PrivateRoute
          path='/member_view_audits'
          component={Member_View_audits}
        />
        <PrivateRoute path='/my_account' component={My_account} />

        <PrivateRoute path='/licensing_test' component={Testing} />
        <Route path='/contact' component={Contact} />
        <Route path='/login' component={Authentication} />
        <Route component={NotFoundPage} />
      </Switch>
    </Main>
    <Footer />
  </Router>
);
export default AppRouter;
