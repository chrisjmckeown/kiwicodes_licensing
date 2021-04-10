import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Alert from '../components/Alert';
import Breadcrumb from '../components/Breadcrumb';
import PageHeader from '../components/PageHeader';
import { getProducts } from '../actions/product';
import Spinner from '../components/Spinner';
import ProductItem from '../components/Testing/ProductItem';

const Testing = ({
  getProducts,
  product: { products, loading: productLoading },
  auth: { member, loading: authLoading },
}) => {
  useEffect(() => {
    !authLoading && getProducts(member.id);
  }, [getProducts, member, authLoading]);
  return (
    <>
      <Breadcrumb breadCrumbs={[]} endPage={'Testing'} />
      <PageHeader pageName={'Testing'} />
      <>
        <h2>
          Allows members to test checking out their license and activating a
          Product, activating an App, and running a generic Model audit.
        </h2>
        <br></br>
        <h3>List of Products assigned too.</h3>
        <>
          {productLoading ? (
            <Spinner />
          ) : (
            <>
              {products &&
                products.map((product) => (
                  <ProductItem key={product.id} product={product} />
                ))}
            </>
          )}
        </>
        <br></br>
        <h3>Sublist of Apps to activate.</h3>
        <br></br>
        <h2>Model Audit</h2>
      </>
      <Alert />
    </>
  );
};

Testing.propTypes = {
  getProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state, props) => ({
  product: state.product,
  auth: state.auth,
});
export default connect(mapStateToProps, { getProducts })(Testing);
