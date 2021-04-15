import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import PrivateRoute from '../../routes/PrivateRoute';

import MemberMenu from '../../components/KCAdmin/ManageMembers/MemberMenu';
import MemberList from '../../components/KCAdmin/ManageMembers/MemberList';
import MemberAdd from '../../components/KCAdmin/ManageMembers/MemberAdd';
import MemberEdit from '../../components/KCAdmin/ManageMembers/MemberEdit';
import MemberBulkAdd from '../../components/KCAdmin/ManageMembers/MemberBulkAdd';

import { getMembers } from '../../actions/memberActions';
import Spinner from '../../components/Spinner';

const Manage_members = ({ getMembers, member: { loading } }) => {
  const { state } = useLocation();
  useEffect(() => {
    getMembers('kiwicodes');
  }, [getMembers]);
  return (
    <>
      <Breadcrumb breadCrumbs={['KC_Admin']} endPage={'Manage Members'} />
      <PageHeader pageName={'Manage Members'} />

      <div className='row lg'>
        <div className='col2 lg'>
          <MemberMenu />
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <div className='col10 lg margin_Top'>
            <Switch>
              <PrivateRoute
                path='/manage_members/list'
                component={MemberList}
                clientID={state ? state.clientID : 0}
              />
              <PrivateRoute
                path='/manage_members/create'
                component={MemberAdd}
              />
              <PrivateRoute
                path='/manage_members/member_edit/:id'
                component={MemberEdit}
              />
              <PrivateRoute
                path='/manage_members/bulkAdd'
                component={MemberBulkAdd}
              />
            </Switch>
          </div>
        )}
      </div>
      <Alert />
    </>
  );
};

Manage_members.propTypes = {
  getMembers: PropTypes.func.isRequired,
  member: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  member: state.member,
});

export default connect(mapStateToProps, { getMembers })(Manage_members);
