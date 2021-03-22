import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getApps } from '../../../actions/app';
import Spinner from '../../Spinner';

import AppTable from './AppTable';

export const AppList = ({ getApps, app: { apps, loading } }) => {
  useEffect(() => {
    getApps();
  }, [getApps]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <AppTable data={apps} />
        </>
      )}
    </>
  );
};

AppList.propTypes = {
  getApps: PropTypes.func.isRequired,
  app: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  app: state.app,
});

export default connect(mapStateToProps, { getApps })(AppList);
