import React from 'react';
import { connect } from 'react-redux';

import ErrorForm from './ErrorForm';
import Alert from '../../Alert';
import Breadcrumb from '../../Breadcrumb';
import PageHeader from '../../PageHeader';
import history from '../../../routes/history';
import { addError } from '../../../actions/error';

export const ErrorAdd = ({ addError }) => {
  const onSubmit = async (error) => {
    const result = await addError(error);
    if (result) {
      history.push('/manage_errors');
    }
  };
  return (
    <>
      <Breadcrumb
        breadCrumbs={['KC_ADMIN', 'manage_errors']}
        endPage={'Create'}
      />
      <PageHeader pageName={'Create a Error'} />
      <ErrorForm onSubmit={onSubmit} />
      <Alert />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addError: (error) => dispatch(addError(error)),
});

export default connect(undefined, mapDispatchToProps)(ErrorAdd);
