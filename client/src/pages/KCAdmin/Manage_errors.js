import React from 'react';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';

const Manage_errors = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={['KC_Admin']} endPage={'Manage Errors'} />
      <PageHeader pageName={'Manage Errors'} />
      <Alert />
    </>
  );
};
export default Manage_errors;
