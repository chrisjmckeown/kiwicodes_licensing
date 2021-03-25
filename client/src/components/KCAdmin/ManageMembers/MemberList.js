import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getMembers } from '../../../actions/member';
import Spinner from '../../Spinner';

import MemberTable from './MemberTable';
import { filter } from '../../../selectors/members';

export const MemberList = ({
  getMembers,
  member: { loading },
  filteredMembers,
}) => {
  useEffect(() => {
    getMembers();
  }, [getMembers]);
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
};

const mapStateToProps = (state, props) => ({
  member: state.member,
  filteredMembers: filter(state.member.members, props.clientID),
});

export default connect(mapStateToProps, { getMembers })(MemberList);
