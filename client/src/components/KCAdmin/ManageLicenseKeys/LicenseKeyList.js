import React from 'react';
import { connect } from 'react-redux';

import LicenseKeyTable from './LicenseKeyTable';
import { filter } from '../../../selectors/licenseKeySelectors';

export const LicenseKeyList = ({ filteredLiceneKeys, clientID }) => {
  return (
    <>
      <LicenseKeyTable data={filteredLiceneKeys} clientID={clientID} />
    </>
  );
};

const mapStateToProps = (state, props) => ({
  filteredLiceneKeys: filter(state.licenseKey.licenseKeys, props.clientID),
});

export default connect(mapStateToProps)(LicenseKeyList);
