import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getLicenseKeys } from '../../../actions/licenseKey';
import Spinner from '../../Spinner';

import LicenseKeyTable from './LicenseKeyTable';
import { filter } from '../../../selectors/licenseKeySelectors';

export const LicenseKeyList = ({
  getLicenseKeys,
  licenseKey: { loading },
  filteredLiceneKeys,
}) => {
  useEffect(() => {
    getLicenseKeys();
  }, [getLicenseKeys]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <LicenseKeyTable data={filteredLiceneKeys} />
        </>
      )}
    </>
  );
};

LicenseKeyList.propTypes = {
  getLicenseKeys: PropTypes.func.isRequired,
  licenseKey: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  licenseKey: state.licenseKey,
  filteredLiceneKeys: filter(state.licenseKey.licenseKeys, props.clientID),
});

export default connect(mapStateToProps, { getLicenseKeys })(LicenseKeyList);
