import React from 'react';
import { connect } from 'react-redux';

import ErrorForm from './ErrorForm';
import history from '../../../routes/history';
import { editError } from '../../../actions/errorActions';

export const ErrorEdit = (props) => {
  const onSubmit = async (error) => {
    const result = await props.editError(props.error.id, error);
    if (result) {
      history.push('/manage_errors/list');
    }
  };
  return (
    <>
      <ErrorForm error={props.error} onSubmit={onSubmit} />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  editError: (id, error) => dispatch(editError(id, error)),
});

const mapStateToProps = (state, props) => ({
  error: state.error.errors.find(
    (error) => error.id.toString() === props.match.params.id
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(ErrorEdit);
