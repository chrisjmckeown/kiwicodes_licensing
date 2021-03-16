import React from 'react';
import Alert from '../components/Alert';
import Breadcrumb from '../components/Breadcrumb';
import PageHeader from '../components/PageHeader';

const Contact = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={[]} endPage={'Contact'} />
      <PageHeader pageName={'Contact'} />
      <Alert />
    </>
  );
};
export default Contact;
