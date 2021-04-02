import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getApps } from '../../../actions/app';
import Spinner from '../../Spinner';

import AppTable from './AppTable';
import { filter } from '../../../selectors/appSelectors';

export const AppList = ({ getApps, app: { apps, loading }, filteredApps }) => {
  useEffect(() => {
    getApps();
  }, [getApps]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <AppTable data={filteredApps} />
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
  filteredApps: filter(state.app.apps, props.productID),
});

export default connect(mapStateToProps, { getApps })(AppList);
