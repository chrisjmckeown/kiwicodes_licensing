import React from 'react';
import Alert from '../components/Alert';
import Breadcrumb from '../components/Breadcrumb';
import PageHeader from '../components/PageHeader';
import ProductList from '../components/ProductBuild/Products';

const Products = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={[]} endPage={'Products'} />
      <PageHeader pageName={'Products'} />
      <ProductList />
      <Alert />
    </>
  );
};
export default Products;
