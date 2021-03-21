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

      <KCAdminSubMenu nav={'header__primaryNav'} item={'header__primaryItem'} />
      <Alert />
    </>
  );
};
export default KC_admin;
