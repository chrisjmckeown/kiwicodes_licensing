import React from 'react';
import { Switch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import PrivateRoute from '../../routes/PrivateRoute';

import LicenseKeyList from '../../components/KCAdmin/ManageLicenseKeys/LicenseKeyList';
import LicenseKeyAdd from '../../components/KCAdmin/ManageLicenseKeys/LicenseKeyAdd';
import LicenseKeyEdit from '../../components/KCAdmin/ManageLicenseKeys/LicenseKeyEdit';
import LicenseKeyMenu from '../../components/KCAdmin/ManageLicenseKeys/LicenseKeyMenu';

const Manage_licensekeys = () => {
  const { state } = useLocation();
  return (
    <>
      <Breadcrumb breadCrumbs={['KC_Admin']} endPage={'Manage License Keys'} />
      <PageHeader pageName={'Manage License Keys'} />
      <div className='row lg'>
        <div className='col2 lg'>
          <LicenseKeyMenu />
        </div>
        <div className='col10 lg margin_Top'>
          <Switch>
            <PrivateRoute
              path='/manage_licensekeys/list'
              component={LicenseKeyList}
              clientID={state ? state.clientID : 0}
              routePremissionLevel={'kiwicodes'}
            />
            <PrivateRoute
              path='/manage_licensekeys/create'
              component={LicenseKeyAdd}
              routePremissionLevel={'kiwicodes'}
            />
            <PrivateRoute
              path='/manage_licensekeys/licensekey_edit/:id'
              component={LicenseKeyEdit}
              routePremissionLevel={'kiwicodes'}
            />
          </Switch>
        </div>
      </div>
      <Alert />
    </>
  );
};
export default Manage_licensekeys;
