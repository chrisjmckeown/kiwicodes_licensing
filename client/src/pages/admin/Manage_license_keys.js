import React from 'react';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';

const Manage_license_keys = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={['Admin']} endPage={'Manage License Keys'} />
      <PageHeader pageName={'Manage License Keys'} />
      <Alert />
    </>
  );
};
export default Manage_license_keys;
