import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getBuilds } from '../../../actions/buildActions';
import BuildTable from './BuildTable';
import Spinner from '../../Spinner';
import { filter } from '../../../selectors/buildSelectors';

export const BuildList = ({
  getBuilds,
  build: { builds, loading },
  filteredBuilds,
}) => {
  useEffect(() => {
    getBuilds();
  }, [getBuilds]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <BuildTable data={filteredBuilds} />
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
  filteredBuilds: filter(state.build.builds, props.productID),
});

export default connect(mapStateToProps, { getBuilds })(BuildList);
