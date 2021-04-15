import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getErrors } from '../../../actions/errorActions';
import Spinner from '../../Spinner';

import ErrorTable from './ErrorTable';

export const ErrorList = ({ getErrors, error: { errors, loading } }) => {
  useEffect(() => {
    getErrors();
  }, [getErrors]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <ErrorTable data={errors} />
        </>
      )}
    </>
  );
};

ErrorList.propTypes = {
  getErrors: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  error: state.error,
});

export default connect(mapStateToProps, { getErrors })(ErrorList);
