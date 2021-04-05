import React from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import PrivateRoute from '../../routes/PrivateRoute';

import LicenseKeyList from '../../components/KCAdmin/ManageLicenseKeys/LicenseKeyList';
import LicenseKeyMenu from '../../components/Admin/ManageLicenseKeys/LicenseKeyMenu';

const Manage_license_keys = ({ auth }) => {
  return (
    <>
      <Breadcrumb breadCrumbs={['Admin']} endPage={'Manage License Keys'} />
      <PageHeader pageName={'Manage License Keys'} />
      <div className='row lg'>
        <div className='col2 lg'>
          <LicenseKeyMenu />
        </div>
        <div className='col10 lg margin_Top'>
          <Switch>
            <PrivateRoute
              path='/admin_manage_licensekeys/list'
              component={LicenseKeyList}
              clientID={auth.member.clientId}
              routePremissionLevel={'admin'}
            />
          </Switch>
        </div>
      </div>
      <Alert />
    </>
  );
};

const mapStateToProps = (state, props) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Manage_license_keys);
