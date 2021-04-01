import React from 'react';
import { Switch } from 'react-router-dom';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import ViewAuditMenu from '../../components/Members/ViewAudits/ViewAuditMenu';

import MyAudits from '../../components/Members/ViewAudits/MyAudits';
import PrivateRoute from '../../routes/PrivateRoute';

const View_audits = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={['Members']} endPage={'View Audits'} />
      <PageHeader pageName={'View Audits'} />

      <div className='row lg'>
        <div className='col3 lg'>
          <ViewAuditMenu />
        </div>
        <div className='col lg margin_Top'>
          <Switch>
            <PrivateRoute
              path='/member_view_audits'
              component={MyAudits}
              routePremissionLevel={'user'}
            />
          </Switch>
        </div>
      </div>
      <Alert />
    </>
  );
};
export default View_audits;
