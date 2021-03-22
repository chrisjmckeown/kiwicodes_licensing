import React from 'react';
import { connect } from 'react-redux';

import AppForm from './AppForm';
import Alert from '../../Alert';
import Breadcrumb from '../../Breadcrumb';
import PageHeader from '../../PageHeader';
import history from '../../../routes/history';
import { editApp, deleteApp } from '../../../actions/app';

export const AppEdit = (props) => {
  const onSubmit = async (app) => {
    const result = await props.editApp(props.app.id, app);
    if (result) {
      history.push('/manage_apps');
    }
  };

  const onClick = async () => {
    const result = await props.deleteApp(props.app.id);
    if (result) {
      history.push('/manage_apps');
    }
  };
  return (
    <>
      <Breadcrumb breadCrumbs={['apps']} endPage={'Create'} />
      <PageHeader pageName={'Edit a App'} />
      <AppForm app={props.app} onSubmit={onSubmit} />

      <button className='button__std button__std--secondary' onClick={onClick}>
        Remove App
      </button>
      <Alert />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  editApp: (id, app) => dispatch(editApp(id, app)),
  deleteApp: (id) => dispatch(deleteApp(id)),
});

const mapStateToProps = (state, props) => ({
  app: state.app.apps.find(
    (app) => app.id.toString() === props.match.params.id
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(AppEdit);
