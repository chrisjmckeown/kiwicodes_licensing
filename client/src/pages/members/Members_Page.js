import React from 'react';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import MemberSubMenu from '../../components/Header/MemberSubMenu';

const Members_Page = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={[]} endPage={'Members'} />
      <PageHeader pageName={'Members'} />
      <div className='row'>Members, view app stats.</div>
      <div className='row justify_content_center'>
        <MemberSubMenu nav={'header__gridNav'} item={'header__gridItem'} />
      </div>
      <Alert />
    </>
  );
};
export default Members_Page;
