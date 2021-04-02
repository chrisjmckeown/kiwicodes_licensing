import React from 'react';
import { connect } from 'react-redux';

import AppForm from './AppForm';
import Alert from '../../Alert';
import history from '../../../routes/history';
import { addApp } from '../../../actions/app';

export const AppAdd = ({ addApp }) => {
  const onSubmit = async (app) => {
    const result = await addApp(app);
    if (result) {
      history.push('/manage_apps/list');
    }
  };
  return (
    <>
      <AppForm onSubmit={onSubmit} />
      <Alert />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addApp: (app) => dispatch(addApp(app)),
});

export default connect(undefined, mapDispatchToProps)(AppAdd);
