import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import Spinner from '../../components/Spinner';

import { getAudits } from '../../actions/auditActions';
import ViewAuditUsage from '../../components/Reports/View_audit_usage';

const View_audits = ({ getAudits, audit: { audits, loading } }) => {
  useEffect(() => {
    getAudits('user');
  }, [getAudits]);
  return (
    <>
      <Breadcrumb breadCrumbs={['Members']} endPage={'View Audits'} />
      <PageHeader pageName={'View Audits'} />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <ViewAuditUsage audits={audits} premissionLevel={'user'} />
        </>
      )}
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
