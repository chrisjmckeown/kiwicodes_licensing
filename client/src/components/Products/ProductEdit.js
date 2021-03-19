import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../actions/alert';

import ProductForm from './ProductForm';
import Alert from '../Alert';
import Breadcrumb from '../Breadcrumb';
import PageHeader from '../PageHeader';
import history from '../../routes/history';

export const ProductEdit = (props) => {
  const onSubmit = (product) => {
    props.startEditExpense(props.product.id, product);
    history.push('/');
  };

  const onClick = () => {
    props.startRemoveExpense({ id: this.props.expense.id });
    history.push('/Products');
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

ProductEdit.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  product: state.product.products.find(
    (product) => product.id.toString() === props.match.params.id
  ),
});
export default connect(mapStateToProps, { setAlert })(ProductEdit);
