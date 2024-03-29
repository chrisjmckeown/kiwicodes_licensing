import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { appSelectors } from '../../selectors/appSelectors';
import ViewAppUsageSearch from './View_app_usage_search';

const View_app_usage = ({ filteredApps, premissionLevel }) => {
  return (
    <>
      <ViewAppUsageSearch premissionLevel={premissionLevel} />
      <div className='row lg'>
        <div className='search-results'>
          Results: {filteredApps.length.toString()}
        </div>
      </div>
      <div className='row lg'>
        <div className='col12 lg'>
          <div className='list-body'>
            {filteredApps.length > 0 ? (
              filteredApps.map((appActivation) => (
                <div className='list-item' key={appActivation.id}>
                  <p className='list-item__title'>
                    {' '}
                    {Moment(appActivation.date).format('DD/MM/yyyy hh:mm:ss')}
                  </p>
                  <p className='list-item__sub-title'>
                    Revit build: {appActivation.revitBuild} App name:{' '}
                    {appActivation.app && appActivation.app.name} Member name:{' '}
                    {appActivation.member &&
                      appActivation.member.firstName +
                        ' ' +
                        appActivation.member.lastName}{' '}
                    Company name:{' '}
                    {appActivation.member.client &&
                      appActivation.member.client.name}
                  </p>
                </div>
              ))
            ) : (
              <div className='list-item list-item--message'>
                No apps found...
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

View_app_usage.propTypes = {
  filteredApps: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  filteredApps: appSelectors(state.appActivation),
});

export default connect(mapStateToProps)(View_app_usage);
