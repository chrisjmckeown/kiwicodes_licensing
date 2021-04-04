import React from 'react';
import { Switch } from 'react-router-dom';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';

import YourAccount from '../../components/Members/YourAccount/YourAccount';
import MyDetailsForm from '../../components/Members/YourAccount/MyDetailsForm';
import MyProfileForm from '../../components/Members/YourAccount/MyProfileForm';
import PasswordForm from '../../components/Members/YourAccount/PasswordForm';
import PrivateRoute from '../../routes/PrivateRoute';

const My_account = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={['Members']} endPage={'My Account'} />
      <PageHeader pageName={'My Account'} />
      <div className='row lg'>
        <div className='col3 lg'>
          <YourAccount />
        </div>
        <div className='col lg margin_Top'>
          <Switch>
            <PrivateRoute
              path='/my_account/my_details'
              component={MyDetailsForm}
              routePremissionLevel={'all'}
            />
            <PrivateRoute
              path='/my_account/my_password'
              component={PasswordForm}
              routePremissionLevel={'all'}
            />
            <PrivateRoute
              path='/my_account/my_profile'
              component={MyProfileForm}
              routePremissionLevel={'all'}
            />
          </Switch>
        </div>
      </div>
      <Alert />
    </>
  );
};
export default My_account;
