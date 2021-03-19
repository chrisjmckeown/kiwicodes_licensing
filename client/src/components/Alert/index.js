import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) => (
  <div className='row'>
    {alerts !== null &&
      alerts.length > 0 &&
      alerts.map((alert) => (
        <div key={alert.id} className={`alert alert__${alert.alertType}`}>
          {alert.msg}
        </div>
      ))}
  </div>
);

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
