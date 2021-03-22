import React from 'react';
import { connect } from 'react-redux';

import ProductForm from './ProductForm';
import Alert from '../../Alert';
import Breadcrumb from '../../Breadcrumb';
import PageHeader from '../../PageHeader';
import history from '../../../routes/history';
import { addProduct } from '../../../actions/product';

export const ProductAdd = ({ addProduct }) => {
  const onSubmit = async (product) => {
    const result = await addProduct(product);
    if (result) {
      history.push('/manage_products');
    }
  };
  return (
    <>
      <Breadcrumb
        breadCrumbs={['KC_ADMIN', 'manage_products']}
        endPage={'Create'}
      />
      <PageHeader pageName={'Create a Product'} />
      <ProductForm onSubmit={onSubmit} />
      <Alert />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => dispatch(addProduct(product)),
});

export default connect(undefined, mapDispatchToProps)(ProductAdd);
