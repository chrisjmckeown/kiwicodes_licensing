import React from 'react';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';

const Members = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={[]} endPage={'Members'} />
      <PageHeader pageName={'Members'} />
      <Alert />
    </>
  );
};
export default Members;
