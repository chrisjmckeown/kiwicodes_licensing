import React from 'react';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';

const Admin = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={[]} endPage={'Admin'} />
      <PageHeader pageName={'Admin'} />
      <Alert />
    </>
  );
};
export default Admin;
