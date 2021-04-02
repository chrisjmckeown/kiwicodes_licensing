import React from 'react';
import { connect } from 'react-redux';

import AppForm from './AppForm';
import history from '../../../routes/history';
import { editApp } from '../../../actions/app';

export const AppEdit = (props) => {
  const onSubmit = async (app) => {
    const result = await props.editApp(props.app.id, app);
    if (result) {
      history.push('/manage_apps/list');
    }
  };
  return (
    <>
      <AppForm app={props.app} onSubmit={onSubmit} />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  editApp: (id, app) => dispatch(editApp(id, app)),
});

const mapStateToProps = (state, props) => ({
  app: state.app.apps.find(
    (app) => app.id.toString() === props.match.params.id
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(AppEdit);
