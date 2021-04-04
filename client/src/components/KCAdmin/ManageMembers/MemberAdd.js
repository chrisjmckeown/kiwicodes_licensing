import React from 'react';
import { connect } from 'react-redux';

import MemberForm from './MemberForm';
import history from '../../../routes/history';
import { addMember } from '../../../actions/memberActions';

export const MemberAdd = ({ addMember, auth }) => {
  const onSubmit = async (member) => {
    const result = await addMember(member);
    if (result) {
      auth.permissionLevel === 'kiwicodes'
        ? history.push('/manage_members/list')
        : history.push('/admin_manage_members/list');
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(MemberAdd);
