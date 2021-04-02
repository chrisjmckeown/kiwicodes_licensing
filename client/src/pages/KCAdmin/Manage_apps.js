import React from 'react';
import { Switch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import PrivateRoute from '../../routes/PrivateRoute';

import AppList from '../../components/KCAdmin/ManageApps/AppList';
import AppAdd from '../../components/KCAdmin/ManageApps/AppAdd';
import AppEdit from '../../components/KCAdmin/ManageApps/AppEdit';
import AppBulkAdd from '../../components/KCAdmin/ManageApps/AppBulkAdd';
import AppMenu from '../../components/KCAdmin/ManageApps/AppMenu';

const Manage_apps = () => {
  const { state } = useLocation();
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
              productID={state ? state.productID : 0}
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
            <PrivateRoute
              path='/manage_apps/bulkAdd'
              component={AppBulkAdd}
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
