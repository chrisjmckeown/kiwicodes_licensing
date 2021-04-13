import React, { useEffect, useState } from 'react';
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
  const [active, setActive] = useState(false);
  useEffect(() => {
    getApps();
  }, [getApps]);
  useEffect(() => {
    const getActive = async () => {
      const productActivation = {
        pcID: await publicIp.v4(),
        productId: product.id,
        memberId: member.id,
      };
      const result = await checkProductActivation(productActivation);
      result ? setActive(true) : setActive(false);
    };
    getActive();
  }, [checkProductActivation, member, product]);

  const onClick = async () => {
    const productActivation = {
      dateActivated: Moment().format('yyyy-MM-DDT00:00:00.000'),
      pcID: await publicIp.v4(),
      productId: product.id,
      memberId: member.id,
    };
    const result = await checkProductActivation(productActivation);
    if (!result) {
      await addProductActivation(productActivation);
      setActive(true);
    } else {
      productActivation.dateReleased = Moment().format(
        'yyyy-MM-DDT00:00:00.000'
      );
      await editProductActivation(productActivation);
      setActive(false);
    }
  };
  return (
    <>
      {appLoading ? (
        <Spinner />
      ) : (
        <>
          <div className='list-item' key={product.id} onClick={onClick}>
            <p className='list-item__sub-title'>{product.id} </p>
            <p className='list-item__title'>{product.name}</p>
            <p className='list-item__data'>
              Active: {active ? 'true' : 'false'}
            </p>
          </div>
          <div className='list-header'>
            <div>App list - click to use</div>
          </div>
          <div className='list-body'>
            {apps.length > 0 ? (
              apps.map(
                (app) =>
                  app.productId === product.id && (
                    <AppItem key={app.id} app={app} />
                  )
              )
            ) : (
              <div className='list-item list-item--message'>
                No apps found...
              </div>
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
