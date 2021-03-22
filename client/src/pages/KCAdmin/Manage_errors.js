import React from 'react';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import ErrorList from '../../components/KCAdmin/ManageErrors/ErrorList';
import CreateButton from '../../components/KCAdmin/CreateButton';

const Manage_errors = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={['KC_Admin']} endPage={'Manage Errors'} />
      <PageHeader pageName={'Manage Errors'} />
      <CreateButton linkText={'Create Error'} link={'/error_create/'} />
      <ErrorList />
      <Alert />
    </>
  );
};
export default Manage_errors;
