import React from 'react';
import { connect } from 'react-redux';

import MemberForm from './MemberForm';
import Alert from '../../Alert';
import Breadcrumb from '../../Breadcrumb';
import PageHeader from '../../PageHeader';
import history from '../../../routes/history';
import { addMember } from '../../../actions/member';

export const MemberAdd = ({ addMember }) => {
  const onSubmit = async (member) => {
    const result = await addMember(member);
    if (result) {
      history.push('/manage_members');
    }
  };
  return (
    <>
      <Breadcrumb
        breadCrumbs={['KC_ADMIN', 'manage_members']}
        endPage={'Create'}
      />
      <PageHeader pageName={'Create a Member'} />
      <MemberForm onSubmit={onSubmit} />
      <Alert />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addMember: (member) => dispatch(addMember(member)),
});

export default connect(undefined, mapDispatchToProps)(MemberAdd);
