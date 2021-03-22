import React from 'react';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import MemberList from '../../components/KCAdmin/ManageMembers/MemberList';
import CreateButton from '../../components/KCAdmin/CreateButton';

const Manage_members = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={['KC_Admin']} endPage={'Manage Members'} />
      <PageHeader pageName={'Manage Members'} />
      <CreateButton linkText={'Create Member'} link={'/member_create/'} />
      <MemberList />
      <Alert />
    </>
  );
};
export default Manage_members;
