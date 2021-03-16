import React from 'react';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';

const View_product_usage = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={['Admin']} endPage={'View Product Usage'} />
      <PageHeader pageName={'View Product Usage'} />
      <Alert />
    </>
  );
};
export default View_product_usage;
