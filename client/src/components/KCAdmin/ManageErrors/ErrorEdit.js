import React from 'react';
import { connect } from 'react-redux';

import ErrorForm from './ErrorForm';
import Alert from '../../Alert';
import Breadcrumb from '../../Breadcrumb';
import PageHeader from '../../PageHeader';
import history from '../../../routes/history';
import { editError, deleteError } from '../../../actions/error';

export const ErrorEdit = (props) => {
  const onSubmit = async (error) => {
    const result = await props.editError(props.error.id, error);
    if (result) {
      history.push('/manage_errors');
    }
  };

  const onClick = async () => {
    const result = await props.deleteError(props.error.id);
    if (result) {
      history.push('/manage_errors');
    }
  };
  return (
    <>
      <Breadcrumb breadCrumbs={['Errors']} endPage={'Create'} />
      <PageHeader pageName={'Edit a Error'} />
      <ErrorForm error={props.error} onSubmit={onSubmit} />

      <button className='button__std button__std--secondary' onClick={onClick}>
        Remove Error
      </button>
      <Alert />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  editError: (id, error) => dispatch(editError(id, error)),
  deleteError: (id) => dispatch(deleteError(id)),
});

const mapStateToProps = (state, props) => ({
  error: state.error.errors.find(
    (error) => error.id.toString() === props.match.params.id
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(ErrorEdit);
