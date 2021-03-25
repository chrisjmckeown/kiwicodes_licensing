import React from 'react';
import Login from '../components/Authentication/Login';
// import Register from '../components/Authentication/Register';
import Alert from '../components/Alert';
import Breadcrumb from '../components/Breadcrumb';
import PageHeader from '../components/PageHeader';

const Authentication = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={[]} endPage={'Login'} />
      <PageHeader pageName={'Login'} />

      <div className='row marginBottom  justify_content_center'>
        <div className='col6 lg'>
          <p>
            Login details are provided during purchase to primary contact
            (Company Admins), or via invite by Company Admins.
          </p>
        </div>
      </div>
      <div className='row justify_content_center'>
        <div className='col6 lg'>
          <Login />
        </div>
        {/* <div className='col6 lg'>
          <Register />
        </div> */}
      </div>
      <Alert />
    </>
  );
};

export default Authentication;
