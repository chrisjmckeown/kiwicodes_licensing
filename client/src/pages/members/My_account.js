import React from 'react';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';

const My_account = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={['Members']} endPage={'My Account'} />
      <PageHeader pageName={'My Account'} />
      <Alert />
    </>
  );
};
export default My_account;
