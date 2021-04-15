import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
import { getLicenseKeys } from '../../actions/licenseKeyActions';
import Spinner from '../../components/Spinner';

const Manage_licensekeys = ({ getLicenseKeys, licenseKey: { loading } }) => {
  const { state } = useLocation();
  useEffect(() => {
    getLicenseKeys('kiwicodes');
  }, [getLicenseKeys]);
  return (
    <>
      <Breadcrumb breadCrumbs={['KC_Admin']} endPage={'Manage License Keys'} />
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
                path='/manage_licensekeys/list'
                component={LicenseKeyList}
                clientID={state ? state.clientID : 0}
              />
              <PrivateRoute
                path='/manage_licensekeys/create'
                component={LicenseKeyAdd}
              />
              <PrivateRoute
                path='/manage_licensekeys/licensekey_edit/:id'
                component={LicenseKeyEdit}
              />
            </Switch>
          </div>
        )}
      </div>
      <Alert />
    </>
  );
};

Manage_licensekeys.propTypes = {
  getLicenseKeys: PropTypes.func.isRequired,
  licenseKey: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  licenseKey: state.licenseKey,
});
export default connect(mapStateToProps, { getLicenseKeys })(Manage_licensekeys);
