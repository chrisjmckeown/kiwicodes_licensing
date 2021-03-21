import React from 'react';
import { connect } from 'react-redux';

import ProductForm from './ProductForm';
import Alert from '../../Alert';
import Breadcrumb from '../../Breadcrumb';
import PageHeader from '../../PageHeader';
import history from '../../../routes/history';
import { editProduct, deleteProduct } from '../../../actions/product';

export const ProductEdit = (props) => {
  const onSubmit = (product) => {
    props.editProduct(props.product.id, product);
    history.push('/manage_products');
  };

  const onClick = () => {
    props.deleteProduct(props.product.id);
    history.push('/manage_products');
  };
  return (
    <>
      <Breadcrumb breadCrumbs={['Products']} endPage={'Create'} />
      <PageHeader pageName={'Edit a Product'} />
      <ProductForm product={props.product} onSubmit={onSubmit} />

      <button className='button__std button__std--secondary' onClick={onClick}>
        Remove Product
      </button>
      <Alert />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  editProduct: (id, product) => dispatch(editProduct(id, product)),
  deleteProduct: (id) => dispatch(deleteProduct(id)),
});

const mapStateToProps = (state, props) => ({
  product: state.product.products.find(
    (product) => product.id.toString() === props.match.params.id
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit);
