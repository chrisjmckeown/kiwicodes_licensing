import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getApps } from '../../actions/app';
import Spinner from '../Spinner';
import AppItem from './AppItem';

const ProductItem = ({
  getApps,
  product,
  app: { apps, loading: appLoading },
}) => {
  useEffect(() => {
    getApps();
  }, [getApps]);

  const activateProduct = (id, name) => {
    console.log('activate product', product.id, product.name);
  };
  return (
    <>
      {appLoading ? (
        <Spinner />
      ) : (
        <>
          <div key={product.id}>
            <div>
              {product.id} {product.name}
            </div>
            <button className='btn' onClick={activateProduct}>
              Activate Product
            </button>
            {apps &&
              apps.map(
                (app) =>
                  app.productId === product.id && (
                    <AppItem key={app.id} app={app} />
                  )
              )}
          </div>
        </>
      )}
    </>
  );
};

ProductItem.propTypes = {
  getApps: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state, props) => ({
  auth: state.auth,
  app: state.app,
});
export default connect(mapStateToProps, { getApps })(ProductItem);
