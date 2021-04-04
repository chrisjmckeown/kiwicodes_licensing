import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({
  routePremissionLevel,
  component: Component,
  auth: { loading, isAuthenticated, permissionLevel },
  props,
  ...rest
}) => {
  const checkPermissionLevels = (props) => {
    if (routePremissionLevel === 'all') {
      return true;
    } else if (
      permissionLevel === 'kiwicodes' &&
      routePremissionLevel === 'kiwicodes'
    ) {
      // if (permissionLevel === 'kiwicodes') {
      return true;
    } else if (
      permissionLevel === 'admin' &&
      routePremissionLevel === 'admin'
    ) {
      // permissionLevel === 'admin' &&
      // (routePremissionLevel === 'admin' || routePremissionLevel === 'user')
      return true;
    } else if (permissionLevel === 'user' && routePremissionLevel === 'user') {
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
        ) : checkPermissionLevels(props) ? (
          <Component
            {...props}
            routePremissionLevel={routePremissionLevel}
            permissionLevel={permissionLevel}
            {...rest}
          />
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
