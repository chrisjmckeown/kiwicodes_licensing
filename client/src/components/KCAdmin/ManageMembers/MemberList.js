import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getMembers } from '../../../actions/memberActions';
import Spinner from '../../Spinner';

import MemberTable from './MemberTable';
import { filter } from '../../../selectors/memberSelectors';

export const MemberList = ({
  getMembers,
  member: { loading },
  filteredMembers,
  auth,
  ...props
}) => {
  useEffect(() => {
    getMembers(auth.member);
  }, [getMembers, auth]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <MemberTable data={filteredMembers} />
        </>
      )}
    </>
  );
};

MemberList.propTypes = {
  getMembers: PropTypes.func.isRequired,
  member: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  member: state.member,
  filteredMembers: filter(state.member.members, props.clientID),
  auth: state.auth,
});

export default connect(mapStateToProps, { getMembers })(MemberList);
