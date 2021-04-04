import React from 'react';
import { connect } from 'react-redux';

import MemberForm from './MemberForm';
import history from '../../../routes/history';
import { editMember } from '../../../actions/memberActions';

export const MemberEdit = (props) => {
  const onSubmit = async (member) => {
    const result = await props.editMember(props.member.id, member);
    if (result) {
      props.auth.permissionLevel === 'kiwicodes'
        ? history.push('/manage_members/list')
        : history.push('/admin_manage_members/list');
    }
  };
  return (
    <>
      <MemberForm
        member={props.member}
        onSubmit={onSubmit}
        createMember={false}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  editMember: (id, member) => dispatch(editMember(id, member)),
});

const mapStateToProps = (state, props) => ({
  member: state.member.members.find(
    (member) => member.id.toString() === props.match.params.id
  ),
  auth: state.auth,
});
export default connect(mapStateToProps, mapDispatchToProps)(MemberEdit);
