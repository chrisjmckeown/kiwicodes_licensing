import React from 'react';
import { Switch } from 'react-router-dom';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import PrivateRoute from '../../routes/PrivateRoute';

import AppList from '../../components/KCAdmin/ManageApps/AppList';
import AppAdd from '../../components/KCAdmin/ManageApps/AppAdd';
import AppEdit from '../../components/KCAdmin/ManageApps/AppEdit';
import AppMenu from '../../components/KCAdmin/ManageApps/AppMenu';

const Manage_apps = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={['KC_Admin']} endPage={'Manage Apps'} />
      <PageHeader pageName={'Manage Apps'} />
      <div className='row lg'>
        <div className='col2 lg'>
          <AppMenu />
        </div>
        <div className='col10 lg margin_Top'>
          <Switch>
            <PrivateRoute
              path='/manage_apps/list'
              component={AppList}
              routePremissionLevel={'kiwicodes'}
            />
            <PrivateRoute
              path='/manage_apps/create'
              component={AppAdd}
              routePremissionLevel={'kiwicodes'}
            />
            <PrivateRoute
              path='/manage_apps/app_edit/:id'
              component={AppEdit}
              routePremissionLevel={'kiwicodes'}
            />
          </Switch>
        </div>
      </div>
      <Alert />
    </>
  );
};
export default Manage_apps;
