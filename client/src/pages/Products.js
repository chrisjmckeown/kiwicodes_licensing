import React from 'react';
import Alert from '../components/Alert';
import Breadcrumb from '../components/Breadcrumb';
import PageHeader from '../components/PageHeader';
import ProductList from '../components/Products/Products';
import ProductManage from '../components/Products/ProductManage';

const Products = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={[]} endPage={'Products'} />
      <PageHeader pageName={'Products'} />
      <ProductManage />
      <ProductList />
      <Alert />
    </>
  );
};
export default Products;
