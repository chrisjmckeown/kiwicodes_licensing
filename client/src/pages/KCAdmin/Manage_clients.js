import React from 'react';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import ClientList from '../../components/KCAdmin/ManageClients/ClientList';
import CreateButton from '../../components/KCAdmin/CreateButton';

const Manage_clients = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={['KC_Admin']} endPage={'Manage Clients'} />
      <PageHeader pageName={'Manage Clients'} />
      <CreateButton linkText={'Create Client'} link={'/client_create/'} />
      <ClientList />
      <Alert />
    </>
  );
};
export default Manage_clients;
