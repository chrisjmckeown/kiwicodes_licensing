import React from 'react';
import { Switch } from 'react-router-dom';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import PrivateRoute from '../../routes/PrivateRoute';

import BuildList from '../../components/KCAdmin/ManageBuilds/BuildList';
import BuildAdd from '../../components/KCAdmin/ManageBuilds/BuildAdd';
import BuildEdit from '../../components/KCAdmin/ManageBuilds/BuildEdit';
import BuildMenu from '../../components/KCAdmin/ManageBuilds/BuildMenu';
import BuildBulkAdd from '../../components/KCAdmin/ManageBuilds/BuildBulkAdd';

const Manage_builds = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={['KC_Admin']} endPage={'Manage Builds'} />
      <PageHeader pageName={'Manage Builds'} />
      <div className='row lg'>
        <div className='col2 lg'>
          <BuildMenu />
        </div>
        <div className='col10 lg margin_Top'>
          <Switch>
            <PrivateRoute
              path='/manage_builds/list'
              component={BuildList}
              routePremissionLevel={'kiwicodes'}
            />
            <PrivateRoute
              path='/manage_builds/create'
              component={BuildAdd}
              routePremissionLevel={'kiwicodes'}
            />
            <PrivateRoute
              path='/manage_builds/build_edit/:id'
              component={BuildEdit}
              routePremissionLevel={'kiwicodes'}
            />
            <PrivateRoute
              path='/manage_builds/bulkAdd'
              component={BuildBulkAdd}
              routePremissionLevel={'kiwicodes'}
            />
          </Switch>
        </div>
      </div>
      <Alert />
    </>
  );
};
export default Manage_builds;
