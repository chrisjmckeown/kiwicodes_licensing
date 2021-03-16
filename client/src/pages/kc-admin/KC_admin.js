import React from 'react';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';

const KC_admin = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={[]} endPage={'KC Admin'} />
      <PageHeader pageName={'KC Admin'} />
      <Alert />
    </>
  );
};
export default KC_admin;
