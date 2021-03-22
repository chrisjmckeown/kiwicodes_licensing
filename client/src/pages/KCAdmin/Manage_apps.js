import React from 'react';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import AppList from '../../components/KCAdmin/ManageApps/AppList';
import CreateButton from '../../components/KCAdmin/CreateButton';

const Manage_apps = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={['KC_Admin']} endPage={'Manage Apps'} />
      <PageHeader pageName={'Manage Apps'} />
      <CreateButton linkText={'Create App'} link={'/app_create/'} />
      <AppList />
      <Alert />
    </>
  );
};
export default Manage_apps;
