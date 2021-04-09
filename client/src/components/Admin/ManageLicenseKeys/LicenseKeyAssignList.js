import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clearLicenseKeyAssignment } from '../../../actions/licenseKeyAssignmentActions';

import { getMembers } from '../../../actions/memberActions';
import { getLicenseKeyAssignments } from '../../../actions/licenseKeyAssignmentActions';
import Spinner from '../../Spinner';

import LicenseKeyAssignTable from './LicenseKeyAssignTable';

export const LicenseKeyAssignList = ({
  getMembers,
  getLicenseKeyAssignments,
  licenseKeyAssignment: { licenseKeyAssignments, loading },
  match: {
    params: { licenseKeyId },
  },
  auth,
  clearLicenseKeyAssignment,
  ...props
}) => {
  useEffect(() => {
    getMembers(auth.member);
  }, [getMembers, auth]);
  useEffect(() => {
    clearLicenseKeyAssignment();
    getLicenseKeyAssignments(auth.member, licenseKeyId);
  }, [clearLicenseKeyAssignment, getLicenseKeyAssignments, auth, licenseKeyId]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <LicenseKeyAssignTable
            licenseKeyAssignments={licenseKeyAssignments}
            licenseKeyId={licenseKeyId}
            clientId={auth.member.clientId}
          />
        </>
      )}
    </>
  );
};

LicenseKeyAssignList.propTypes = {
  getMembers: PropTypes.func.isRequired,
  getLicenseKeyAssignments: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  auth: state.auth,
  licenseKeyAssignment: state.licenseKeyAssignment,
  clearLicenseKeyAssignment: PropTypes.func.isRequired,
});

const mapDispatchToProps = (dispatch) => ({
  getMembers: (member) => dispatch(getMembers(member)),
  getLicenseKeyAssignments: (member, licenseKeyId) =>
    dispatch(getLicenseKeyAssignments(member, licenseKeyId)),
  clearLicenseKeyAssignment: () => dispatch(clearLicenseKeyAssignment()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LicenseKeyAssignList);
