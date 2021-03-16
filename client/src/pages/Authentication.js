import React from 'react';
import Login from '../components/Authentication/Login';
import Register from '../components/Authentication/Register';
import Alert from '../components/Alert';
import Breadcrumb from '../components/Breadcrumb';
import PageHeader from '../components/PageHeader';

const Authentication = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={[]} endPage={'Login'} />
      <PageHeader pageName={'Login'} />
      <div className='row'>
        <div className='col6'>
          <Register />
        </div>
        <div className='col6'>
          <Login />
        </div>
      </div>
      <Alert />
    </>
  );
};

export default Authentication;
