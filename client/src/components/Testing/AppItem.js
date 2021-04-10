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
    console.log(result);
    if (result) await addAppActivation(appActivation);
  };
  return (
    <>
      <div key={app.id}>
        <div>{app.name}</div>
        <button className='btn' onClick={activateApp}>
          Activate App
        </button>
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
