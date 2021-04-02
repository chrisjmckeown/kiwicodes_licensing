import React from 'react';
import { connect } from 'react-redux';

import LicenseKeyForm from './LicenseKeyForm';
import history from '../../../routes/history';
import { editLicenseKey } from '../../../actions/licenseKey';

export const LicenseKeyEdit = (props) => {
  const onSubmit = async (licenseKey) => {
    const result = await props.editLicenseKey(props.licenseKey.id, licenseKey);
    if (result) {
      history.push('/manage_licensekeys/list');
    }
  };
  return (
    <>
      <LicenseKeyForm licenseKey={props.licenseKey} onSubmit={onSubmit} />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  editLicenseKey: (id, licenseKey) => dispatch(editLicenseKey(id, licenseKey)),
});

const mapStateToProps = (state, props) => ({
  licenseKey: state.licenseKey.licenseKeys.find(
    (licenseKey) => licenseKey.id.toString() === props.match.params.id
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(LicenseKeyEdit);
