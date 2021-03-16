import React from 'react';
import Alert from '../components/Alert';
import Breadcrumb from '../components/Breadcrumb';
import PageHeader from '../components/PageHeader';

const Testing = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={[]} endPage={'Testing'} />
      <PageHeader pageName={'Testing'} />
      <Alert />
    </>
  );
};
export default Testing;
