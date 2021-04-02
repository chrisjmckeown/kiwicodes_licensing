import React from 'react';
import { connect } from 'react-redux';

import LicenseKeyForm from './LicenseKeyForm';
import history from '../../../routes/history';
import { addLicenseKey } from '../../../actions/licenseKey';

export const LicenseKeyAdd = ({ addLicenseKey }) => {
  const onSubmit = async (licensekey) => {
    const result = await addLicenseKey(licensekey);
    if (result) {
      history.push('/manage_licensekeys/list');
    }
  };
  return (
    <>
      <LicenseKeyForm onSubmit={onSubmit} />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addLicenseKey: (licensekey) => dispatch(addLicenseKey(licensekey)),
});

export default connect(undefined, mapDispatchToProps)(LicenseKeyAdd);
