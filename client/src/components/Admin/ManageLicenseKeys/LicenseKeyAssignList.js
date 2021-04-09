import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getMembers } from '../../../actions/memberActions';
import { getLicenseKeyAssignments } from '../../../actions/licenseKeyAssignmentActions';
import Spinner from '../../Spinner';

import LicenseKeyAssignTable from './LicenseKeyAssignTable';

export const LicenseKeyAssignList = ({
  getMembers,
  getLicenseKeyAssignments,
  member: { members, loading },
  licenseKeyAssignment: { licenseKeyAssignments },
  match: {
    params: { licenseKeyId },
  },
  auth,
  ...props
}) => {
  useEffect(() => {
    getMembers(auth.member);
  }, [getMembers, auth]);
  useEffect(() => {
    getLicenseKeyAssignments(auth.member, licenseKeyId);
  }, [getLicenseKeyAssignments, auth, licenseKeyId]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <LicenseKeyAssignTable
            members={members}
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
  member: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  member: state.member,
  auth: state.auth,
  licenseKeyAssignment: state.licenseKeyAssignment,
});

const mapDispatchToProps = (dispatch) => ({
  getMembers: (member) => dispatch(getMembers(member)),
  getLicenseKeyAssignments: (member, licenseKeyId) =>
    dispatch(getLicenseKeyAssignments(member, licenseKeyId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LicenseKeyAssignList);
