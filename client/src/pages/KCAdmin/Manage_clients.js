import React from 'react';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import ClientList from '../../components/KCAdmin/ManageClients/ClientList';

import ClientMenu from '../../components/KCAdmin/ManageClients/ClientMenu';

const Manage_clients = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={['KC_Admin']} endPage={'Manage Clients'} />
      <PageHeader pageName={'Manage Clients'} />

      <div className='row lg'>
        <div className='col3 lg'>
          <ClientMenu />
        </div>
        <div className='col lg margin_Top'>
          <ClientList />
        </div>
      </div>
      <Alert />
    </>
  );
};
export default Manage_clients;
