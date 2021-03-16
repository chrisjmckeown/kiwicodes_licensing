import React from 'react';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';

const Manage_members = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={['KC_Admin']} endPage={'Manage Members'} />
      <PageHeader pageName={'Manage Members'} />
      <Alert />
    </>
  );
};
export default Manage_members;
