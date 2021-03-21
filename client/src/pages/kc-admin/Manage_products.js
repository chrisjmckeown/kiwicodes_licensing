import React from 'react';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import ProductList from '../../components/KC-Admin/ManageProducts/Products';
import ProductManage from '../../components/KC-Admin/ManageProducts/ProductManage';

const Manage_products = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={['KC_Admin']} endPage={'Manage Products'} />
      <PageHeader pageName={'Manage Products'} />
      <ProductManage />
      <ProductList />
      <Alert />
    </>
  );
};
export default Manage_products;
