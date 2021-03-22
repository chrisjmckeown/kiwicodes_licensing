import React from 'react';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import KCAdminSubMenu from '../../components/Header/KCAdminSubMenu';

const KC_admin = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={[]} endPage={'KC Admin'} />
      <PageHeader pageName={'KC Admin'} />
      <div className='row'>Manage the Kiwi Codes app and client database.</div>
      <div className='row justify_content_center'>
        <KCAdminSubMenu nav={'header__gridNav'} item={'header__gridItem'} />
      </div>
      <Alert />
    </>
  );
};
export default KC_admin;
