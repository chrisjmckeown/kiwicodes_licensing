import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getMembers } from '../../../actions/memberActions';
import Spinner from '../../Spinner';

import MemberTable from './LicenseKeyAssignTable';

export const LicenseKeyAssignList = ({
  getMembers,
  member: { members, loading },
  auth,
}) => {
  useEffect(() => {
    getMembers(auth.member);
  }, [getMembers, auth]);
  console.log(members);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <MemberTable data={members} />
        </>
      )}
    </>
  );
};

LicenseKeyAssignList.propTypes = {
  getMembers: PropTypes.func.isRequired,
  member: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  member: state.member,
  auth: state.auth,
});

export default connect(mapStateToProps, { getMembers })(LicenseKeyAssignList);
