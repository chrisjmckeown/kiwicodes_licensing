import React from 'react';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';

const View_audits = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={['Admin']} endPage={'View Audits'} />
      <PageHeader pageName={'View Audits'} />
      <Alert />
    </>
  );
};
export default View_audits;
