import React from 'react';
import { connect } from 'react-redux';

import AppForm from './AppForm';
import Alert from '../../Alert';
import Breadcrumb from '../../Breadcrumb';
import PageHeader from '../../PageHeader';
import history from '../../../routes/history';
import { addApp } from '../../../actions/app';

export const AppAdd = ({ addApp }) => {
  const onSubmit = async (app) => {
    const result = await addApp(app);
    if (result) {
      history.push('/manage_apps');
    }
  };
  return (
    <>
      <Breadcrumb
        breadCrumbs={['KC_ADMIN', 'manage_apps']}
        endPage={'Create'}
      />
      <PageHeader pageName={'Create a App'} />
      <AppForm onSubmit={onSubmit} />
      <Alert />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addApp: (app) => dispatch(addApp(app)),
});

export default connect(undefined, mapDispatchToProps)(AppAdd);
