import React from 'react';
import { connect } from 'react-redux';

import ErrorForm from './ErrorForm';
import history from '../../../routes/history';
import { addError } from '../../../actions/error';

export const ErrorAdd = ({ addError }) => {
  const onSubmit = async (error) => {
    const result = await addError(error);
    if (result) {
      history.push('/manage_errors/list');
    }
  };
  return (
    <>
      <ErrorForm onSubmit={onSubmit} />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addError: (error) => dispatch(addError(error)),
});

export default connect(undefined, mapDispatchToProps)(ErrorAdd);
