import React from 'react';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import AdminSubMenu from '../../components/Header/AdminSubMenu';

const Admin_Page = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={[]} endPage={'Admin'} />
      <PageHeader pageName={'Admin'} />
      <div className='row'>
        Clients, manage your members(staff) and view app stats.
      </div>
      <div className='row justify_content_center'>
        <AdminSubMenu nav={'header__gridNav'} item={'header__gridItem'} />
      </div>
      <Alert />
    </>
  );
};
export default Admin_Page;
