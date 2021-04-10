import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getApps } from '../../actions/app';
import Spinner from '../Spinner';
import AppItem from './AppItem';
import Moment from 'moment';
import {
  addProductActivation,
  editProductActivation,
  checkProductActivation,
} from '../../actions/productActivationActions';
import publicIp from 'public-ip';
const ProductItem = ({
  addProductActivation,
  editProductActivation,
  checkProductActivation,
  getApps,
  product,
  app: { apps, loading: appLoading },
  auth: { member },
}) => {
  useEffect(() => {
    getApps();
  }, [getApps]);

  const activateProduct = async () => {
    const productActivation = {
      dateActivated: Moment().format('yyyy-MM-DDT00:00:00.000'),
      pcID: await publicIp.v4(),
      productId: product.id,
      memberId: member.id,
    };
    const result = await checkProductActivation(productActivation);
    if (!result) await addProductActivation(productActivation);
  };

  const releaseProduct = async () => {
    const productActivation = {
      dateReleased: Moment().format('yyyy-MM-DDT00:00:00.000'),
      pcID: await publicIp.v4(),
      productId: product.id,
      memberId: member.id,
    };
    await editProductActivation(productActivation);
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
            <button className='btn' onClick={releaseProduct}>
              Release Product
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
  addProductActivation: PropTypes.func.isRequired,
  editProductActivation: PropTypes.func.isRequired,
  checkProductActivation: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  app: PropTypes.object.isRequired,
};
const mapStateToProps = (state, props) => ({
  auth: state.auth,
  app: state.app,
});

const mapDispatchToProps = (dispatch) => ({
  addProductActivation: (productActivation) =>
    dispatch(addProductActivation(productActivation)),
  editProductActivation: (productActivation) =>
    dispatch(editProductActivation(productActivation)),
  checkProductActivation: (productActivation) =>
    dispatch(checkProductActivation(productActivation)),
  getApps: () => dispatch(getApps()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
