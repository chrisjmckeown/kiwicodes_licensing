import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import PrivateRoute from '../../routes/PrivateRoute';
import Spinner from '../../components/Spinner';

import { getAudits } from '../../actions/auditActions';
import AuditMenuAdmin from '../../components/Reports/AuditMenuAdmin';
import ViewAuditSearch from '../../components/Reports/View_audit_usage_search';

import RawData from '../../components/Reports/View_audit_rawData';
import Links from '../../components/Reports/View_audit_Links';
import Warnings from '../../components/Reports/View_audit_Warnings';
import Views from '../../components/Reports/View_audit_Views';

const View_audits = ({ getAudits, audit: { audits, loading } }) => {
  useEffect(() => {
    getAudits('admin');
  }, [getAudits]);
  return (
    <>
      <Breadcrumb breadCrumbs={['Admin']} endPage={'View Audits'} />
      <PageHeader pageName={'View Audits'} />
      <ViewAuditSearch premissionLevel={'admin'} />
      <div className='row lg'>
        <div className='col2 lg'>
          <AuditMenuAdmin />
        </div>
        <div className='col10 lg margin_Top'>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <Switch>
                <PrivateRoute
                  path='/admin_view_audits/raw_data'
                  component={RawData}
                  audits={audits}
                  premissionLevel={'admin'}
                />
                <PrivateRoute
                  path='/admin_view_audits/links'
                  component={Links}
                  audits={audits}
                  premissionLevel={'admin'}
                />
                <PrivateRoute
                  path='/admin_view_audits/warnings'
                  component={Warnings}
                  audits={audits}
                  premissionLevel={'admin'}
                />
                <PrivateRoute
                  path='/admin_view_audits/views'
                  component={Views}
                  audits={audits}
                  premissionLevel={'admin'}
                />
              </Switch>
            </>
          )}
        </div>
      </div>
      <Alert />
    </>
  );
};
View_audits.propTypes = {
  audit: PropTypes.object.isRequired,
  getAudits: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  audit: state.audit,
});
export default connect(mapStateToProps, { getAudits })(View_audits);
