import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({
  component: Component,
  auth: { loading, isAuthenticated, permissionLevel },
  props,
  ...rest
}) => {
  const checkPermissionLevels = () => {
    if (permissionLevel === 'kiwicodes') {
      return true;
    } else if (permissionLevel === 'admin') {
      return true;
    } else if (permissionLevel === 'user') {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !loading ? (
          <Redirect to='/login' />
        ) : checkPermissionLevels() ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to='/' />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
