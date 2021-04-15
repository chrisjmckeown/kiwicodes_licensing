import React from 'react';
import { connect } from 'react-redux';

import ProductForm from './ProductForm';
import history from '../../../routes/history';
import { addProduct } from '../../../actions/productActions';

export const ProductAdd = ({ addProduct }) => {
  const onSubmit = async (product) => {
    const result = await addProduct(product);
    if (result) {
      history.push('/manage_products/list');
    }
  };
  return (
    <>
      <ProductForm onSubmit={onSubmit} />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => dispatch(addProduct(product)),
});

export default connect(undefined, mapDispatchToProps)(ProductAdd);
