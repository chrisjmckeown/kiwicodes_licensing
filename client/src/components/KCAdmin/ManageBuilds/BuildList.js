import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getBuilds } from '../../../actions/buildActions';
import BuildTable from './BuildTable';
import Spinner from '../../Spinner';

export const BuildList = ({ getBuilds, build: { builds, loading } }) => {
  useEffect(() => {
    getBuilds();
  }, [getBuilds]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <BuildTable data={builds} />
        </>
      )}
    </>
  );
};

BuildList.propTypes = {
  getBuilds: PropTypes.func.isRequired,
  build: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  build: state.build,
});

export default connect(mapStateToProps, { getBuilds })(BuildList);
