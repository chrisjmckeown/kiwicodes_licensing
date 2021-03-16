import React from 'react';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';

const Manage_apps = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={['KC_Admin']} endPage={'Manage Apps'} />
      <PageHeader pageName={'Manage Apps'} />
      <Alert />
    </>
  );
};
export default Manage_apps;
