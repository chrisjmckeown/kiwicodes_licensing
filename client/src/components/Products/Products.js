import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getProducts } from '../../actions/product';
import Product from './Product';
import Spinner from '../Spinner';

export const Products = ({ getProducts, product: { products, loading } }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {products.length > 0 ? (
            products.map((product) => (
              <Product key={product._id} product={product} />
            ))
          ) : (
            <h4>No products found...</h4>
          )}
        </>
      )}
    </>
  );
};

Products.propTypes = {
  getProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  product: state.product,
});

export default connect(mapStateToProps, { getProducts })(Products);
