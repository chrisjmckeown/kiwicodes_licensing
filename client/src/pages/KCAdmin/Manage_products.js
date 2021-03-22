import React from 'react';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import ProductList from '../../components/KCAdmin/ManageProducts/ProductList';
import CreateButton from '../../components/KCAdmin/CreateButton';

const Manage_products = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={['KC_Admin']} endPage={'Manage Products'} />
      <PageHeader pageName={'Manage Products'} />
      <CreateButton linkText={'Create Product'} link={'/product_create/'} />
      <ProductList />
      <Alert />
    </>
  );
};
export default Manage_products;
