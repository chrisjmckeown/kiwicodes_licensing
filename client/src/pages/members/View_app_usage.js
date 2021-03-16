import React from 'react';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';

const View_app_usage = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={['Members']} endPage={'View App Usage'} />
      <PageHeader pageName={'View App Usage'} />
      <Alert />
    </>
  );
};
export default View_app_usage;
