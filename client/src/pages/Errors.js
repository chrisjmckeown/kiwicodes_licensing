import React from 'react';
import Alert from '../components/Alert';
import Breadcrumb from '../components/Breadcrumb';
import PageHeader from '../components/PageHeader';

const Errors = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={[]} endPage={'Errors'} />
      <PageHeader pageName={'Errors'} />
      <Alert />
    </>
  );
};
export default Errors;
