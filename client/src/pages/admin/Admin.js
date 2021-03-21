import React from 'react';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import AdminSubMenu from '../../components/Header/AdminSubMenu';

const Admin = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={[]} endPage={'Admin'} />
      <PageHeader pageName={'Admin'} />
      <AdminSubMenu nav={'header__gridNav'} item={'header__gridItem'} />
      <Alert />
    </>
  );
};
export default Admin;
