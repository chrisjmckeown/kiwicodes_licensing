import React from 'react';
import { connect } from 'react-redux';

import MemberForm from './MemberForm';
import Alert from '../../Alert';
import Breadcrumb from '../../Breadcrumb';
import PageHeader from '../../PageHeader';
import history from '../../../routes/history';
import { editMember, deleteMember } from '../../../actions/member';

export const MemberEdit = (props) => {
  const onSubmit = async (member) => {
    const result = await props.editMember(props.member.id, member);
    if (result) {
      history.push('/manage_members');
    }
  };

  const onClick = async () => {
    const result = await props.deleteMember(props.member.id);
    if (result) {
      history.push('/manage_members');
    }
  };
  return (
    <>
      <Breadcrumb breadCrumbs={['Members']} endPage={'Create'} />
      <PageHeader pageName={'Edit a Member'} />
      <MemberForm member={props.member} onSubmit={onSubmit} />

      <button className='button__std button__std--secondary' onClick={onClick}>
        Remove Member
      </button>
      <Alert />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  editMember: (id, member) => dispatch(editMember(id, member)),
  deleteMember: (id) => dispatch(deleteMember(id)),
});

const mapStateToProps = (state, props) => ({
  member: state.member.members.find(
    (member) => member.id.toString() === props.match.params.id
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(MemberEdit);
