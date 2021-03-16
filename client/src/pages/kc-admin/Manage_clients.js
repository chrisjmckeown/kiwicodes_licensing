import React from 'react';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';

const Manage_clients = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={['KC_Admin']} endPage={'Manage Clients'} />
      <PageHeader pageName={'Manage Clients'} />
      <Alert />
    </>
  );
};
export default Manage_clients;
