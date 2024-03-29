import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getProducts } from '../../../actions/productActions';
import Spinner from '../../Spinner';

import ProductTable from './ProductTable';

export const ProductList = ({
  getProducts,
  product: { products, loading },
}) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <ProductTable data={products} />
        </>
      )}
    </>
  );
};

ProductList.propTypes = {
  getProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  product: state.product,
});

export default connect(mapStateToProps, { getProducts })(ProductList);
