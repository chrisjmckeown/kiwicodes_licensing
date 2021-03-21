import React from 'react';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import MemberSubMenu from '../../components/Header/MemberSubMenu';

const Members = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={[]} endPage={'Members'} />
      <PageHeader pageName={'Members'} />
      <MemberSubMenu nav={'header__gridNav'} item={'header__gridItem'} />
      <Alert />
    </>
  );
};
export default Members;
