import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import Spinner from '../../components/Spinner';

import { getAppActivations } from '../../actions/appActivationActions';
import ViewAppUsage from '../../components/Reports/View_app_usage';

const View_app_usage = ({
  getAppActivations,
  appActivation: { appActivations, loading },
}) => {
  useEffect(() => {
    getAppActivations('kiwicodes');
  }, [getAppActivations]);
  return (
    <>
      <Breadcrumb breadCrumbs={['KC_Admin']} endPage={'View App Usage'} />
      <PageHeader pageName={'View App Usage'} />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <ViewAppUsage
            appActivations={appActivations}
            premissionLevel={'kiwicodes'}
          />
        </>
      )}
      <Alert />
    </>
  );
};

View_app_usage.propTypes = {
  getAppActivations: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  appActivation: state.appActivation,
});
export default connect(mapStateToProps, { getAppActivations })(View_app_usage);
