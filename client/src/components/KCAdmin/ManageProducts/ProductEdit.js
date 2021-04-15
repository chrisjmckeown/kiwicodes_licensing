import React from 'react';
import { connect } from 'react-redux';

import ProductForm from './ProductForm';
import history from '../../../routes/history';
import { editProduct } from '../../../actions/productActions';

export const ProductEdit = (props) => {
  const onSubmit = async (product) => {
    const result = await props.editProduct(props.product.id, product);
    if (result) {
      history.push('/manage_products/list');
    }
  };
  return (
    <>
      <ProductForm product={props.product} onSubmit={onSubmit} />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  editProduct: (id, product) => dispatch(editProduct(id, product)),
});

const mapStateToProps = (state, props) => ({
  product: state.product.products.find(
    (product) => product.id.toString() === props.match.params.id
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit);
