import React from 'react';
import Alert from '../Alert';
import Breadcrumb from '../Breadcrumb';
import PageHeader from '../PageHeader';

export const ProductChatList = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={['Products']} endPage={'Product Chat'} />
      <PageHeader pageName={'Product Chat'} />
      <div>Product chat</div>
      <Alert />
    </>
  );
};

export default ProductChatList;
