import React from 'react';
import { connect } from 'react-redux';

import MemberForm from './MemberForm';
import history from '../../../routes/history';
import { addMember } from '../../../actions/member';

export const MemberAdd = ({ addMember }) => {
  const onSubmit = async (member) => {
    const result = await addMember(member);
    if (result) {
      history.push('/manage_members/list');
    }
  };
  return (
    <>
      <MemberForm onSubmit={onSubmit} createMember={true} />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addMember: (member) => dispatch(addMember(member)),
});

export default connect(undefined, mapDispatchToProps)(MemberAdd);
