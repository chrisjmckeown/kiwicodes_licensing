import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getMembers } from '../../../actions/member';
import Spinner from '../../Spinner';

import MemberTable from './MemberTable';

export const MemberList = ({ getMembers, member: { members, loading } }) => {
  useEffect(() => {
    getMembers();
  }, [getMembers]);

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

MemberList.propTypes = {
  getMembers: PropTypes.func.isRequired,
  member: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  member: state.member,
});

export default connect(mapStateToProps, { getMembers })(MemberList);
