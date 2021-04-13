import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { addAppActivation } from '../../actions/appActivationActions';
import { checkProductActivation } from '../../actions/productActivationActions';

const AppItem = ({
  addAppActivation,
  checkProductActivation,
  app,
  auth: { member },
}) => {
  const activateApp = async () => {
    const appActivation = {
      dateActivated: Moment().format('yyyy-MM-DDT00:00:00.000'),
      buildNumber: 'extractedFromRevit',
      revitBuild: 'extractedFromRevit',
      appId: app.id,
      memberId: member.id,
    };

    const productActivation = {
      productId: app.productId,
      memberId: member.id,
    };
    const result = await checkProductActivation(productActivation);
    if (result) await addAppActivation(appActivation);
  };
  return (
    <>
      <div className='list-item' key={app.id} onClick={activateApp}>
        <p className='list-item__sub-title'>{app.id} </p>
        <p className='list-item__title'>{app.name}</p>
        <p className='list-item__data'>{''}</p>
      </div>
    </>
  );
};

AppItem.propTypes = {
  addAppActivation: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  checkProductActivation: PropTypes.func.isRequired,
};
const mapStateToProps = (state, props) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  addAppActivation: (appActivation) =>
    dispatch(addAppActivation(appActivation)),
  checkProductActivation: (productActivation) =>
    dispatch(checkProductActivation(productActivation)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AppItem);
