import React from 'react';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';

const Manage_products = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={['KC_Admin']} endPage={'Manage Products'} />
      <PageHeader pageName={'Manage Products'} />
      <Alert />
    </>
  );
};
export default Manage_products;
