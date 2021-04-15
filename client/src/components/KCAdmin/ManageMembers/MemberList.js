import React from 'react';
import { connect } from 'react-redux';

import MemberTable from './MemberTable';
import { filter } from '../../../selectors/memberSelectors';

export const MemberList = ({ filteredMembers, clientID }) => {
  return (
    <>
      <MemberTable data={filteredMembers} clientID={clientID} />
    </>
  );
};

const mapStateToProps = (state, props) => ({
  filteredMembers: filter(state.member.members, props.clientID),
});

export default connect(mapStateToProps)(MemberList);
