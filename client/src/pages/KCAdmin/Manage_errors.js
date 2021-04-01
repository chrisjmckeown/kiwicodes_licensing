import React from 'react';
import { Switch } from 'react-router-dom';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import PrivateRoute from '../../routes/PrivateRoute';

import ErrorMenu from '../../components/KCAdmin/ManageErrors/ErrorMenu';
import ErrorList from '../../components/KCAdmin/ManageErrors/ErrorList';
import ErrorAdd from '../../components/KCAdmin/ManageErrors/ErrorAdd';
import ErrorEdit from '../../components/KCAdmin/ManageErrors/ErrorEdit';

const Manage_errors = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={['KC_Admin']} endPage={'Manage Errors'} />
      <PageHeader pageName={'Manage Errors'} />
      <div className='row lg'>
        <div className='col3 lg'>
          <ErrorMenu />
        </div>
        <div className='col9 lg margin_Top'>
          <Switch>
            <PrivateRoute
              path='/manage_errors/list'
              component={ErrorList}
              routePremissionLevel={'kiwicodes'}
            />
            <PrivateRoute
              path='/manage_errors/create'
              component={ErrorAdd}
              routePremissionLevel={'kiwicodes'}
            />
            <PrivateRoute
              path='/manage_errors/error_edit/:id'
              component={ErrorEdit}
              routePremissionLevel={'kiwicodes'}
            />
          </Switch>
        </div>
      </div>
      <Alert />
    </>
  );
};
export default Manage_errors;
