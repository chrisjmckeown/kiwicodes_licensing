import React from 'react';
import { Switch } from 'react-router-dom';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import PrivateRoute from '../../routes/PrivateRoute';

import ClientList from '../../components/KCAdmin/ManageClients/ClientList';
import ClientAdd from '../../components/KCAdmin/ManageClients/ClientAdd';
import ClientEdit from '../../components/KCAdmin/ManageClients/ClientEdit';
import ClientMenu from '../../components/KCAdmin/ManageClients/ClientMenu';

const Manage_clients = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={['KC_Admin']} endPage={'Manage Clients'} />
      <PageHeader pageName={'Manage Clients'} />
      <div className='row lg'>
        <div className='col2 lg'>
          <ClientMenu />
        </div>
        <div className='col10 lg margin_Top'>
          <Switch>
            <PrivateRoute
              path='/manage_clients/list'
              component={ClientList}
              routePremissionLevel={'kiwicodes'}
            />
            <PrivateRoute
              path='/manage_clients/create'
              component={ClientAdd}
              routePremissionLevel={'kiwicodes'}
            />
            <PrivateRoute
              path='/manage_clients/client_edit/:id'
              component={ClientEdit}
              routePremissionLevel={'kiwicodes'}
            />
          </Switch>
        </div>
      </div>
      <Alert />
    </>
  );
};
export default Manage_clients;
