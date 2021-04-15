import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import PrivateRoute from '../../routes/PrivateRoute';

import LicenseKeyList from '../../components/KCAdmin/ManageLicenseKeys/LicenseKeyList';
import LicenseKeyAssignList from '../../components/Admin/ManageLicenseKeys/LicenseKeyAssignList';
import LicenseKeyMenu from '../../components/Admin/ManageLicenseKeys/LicenseKeyMenu';
import { getLicenseKeys } from '../../actions/licenseKeyActions';
import Spinner from '../../components/Spinner';

const Manage_license_keys = ({
  getLicenseKeys,
  auth,
  licenseKey: { loading },
}) => {
  useEffect(() => {
    getLicenseKeys('admin');
  }, [getLicenseKeys]);

  return (
    <>
      <Breadcrumb breadCrumbs={['Admin']} endPage={'Manage License Keys'} />
      <PageHeader pageName={'Manage License Keys'} />
      <div className='row lg'>
        <div className='col2 lg'>
          <LicenseKeyMenu />
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <div className='col10 lg margin_Top'>
            <Switch>
              <PrivateRoute
                path='/admin_manage_licensekeys/list'
                component={LicenseKeyList}
                clientID={auth.member.clientId}
              />
            </Switch>
            <PrivateRoute
              path='/admin_manage_licensekeys/licensekey_assign/:licenseKeyId'
              component={LicenseKeyAssignList}
            />
          </div>
        )}
      </div>
      <Alert />
    </>
  );
};

Manage_license_keys.propTypes = {
  getLicenseKeys: PropTypes.func.isRequired,
  licenseKey: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  licenseKey: state.licenseKey,
  auth: state.auth,
});
export default connect(mapStateToProps, { getLicenseKeys })(
  Manage_license_keys
);
