import React from 'react';
import { Switch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import PrivateRoute from '../../routes/PrivateRoute';

import MemberMenu from '../../components/Admin/ManageMembers/MemberMenu';
import MemberList from '../../components/KCAdmin/ManageMembers/MemberList';
import MemberAdd from '../../components/KCAdmin/ManageMembers/MemberAdd';
import MemberEdit from '../../components/KCAdmin/ManageMembers/MemberEdit';
import MemberBulkAdd from '../../components/KCAdmin/ManageMembers/MemberBulkAdd';

const Manage_members = (props) => {
  const { state } = useLocation();
  return (
    <>
      <Breadcrumb breadCrumbs={['KC_Admin']} endPage={'Manage Members'} />
      <PageHeader pageName={'Manage Members'} />

      <div className='row lg'>
        <div className='col2 lg'>
          <MemberMenu />
        </div>
        <div className='col10 lg margin_Top'>
          <Switch>
            <PrivateRoute
              path='/admin_manage_members/list'
              component={MemberList}
              clientID={state ? state.clientID : 0}
              routePremissionLevel={'admin'}
            />
            <PrivateRoute
              path='/admin_manage_members/create'
              component={MemberAdd}
              routePremissionLevel={'admin'}
            />
            <PrivateRoute
              path='/admin_manage_members/member_edit/:id'
              component={MemberEdit}
              routePremissionLevel={'admin'}
            />
            <PrivateRoute
              path='/admin_manage_members/bulkAdd'
              component={MemberBulkAdd}
              routePremissionLevel={'admin'}
            />
          </Switch>
        </div>
      </div>
      <Alert />
    </>
  );
};

export default Manage_members;
