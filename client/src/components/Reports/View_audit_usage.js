import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { auditSelectors } from '../../selectors/auditSelectors';
import ViewAuditSearch from './View_audit_usage_search';

const View_audit_usage = ({ filteredAudits, premissionLevel }) => {
  return (
    <>
      <ViewAuditSearch premissionLevel={premissionLevel} />
      <div className='row lg'>
        <div className='search-results'>
          Results: {filteredAudits.length.toString()}
        </div>
      </div>
      <div className='row lg'>
        <div className='col12 lg'>
          <div className='list-body'>
            {filteredAudits.length > 0 ? (
              filteredAudits.map((audit, index) => (
                <div key={index}>
                  <div className='list-header'>
                    <div>Audit</div>
                  </div>
                  <div className='list-item' key={audit.id}>
                    <p className='list-item__title'>
                      {Moment(audit.date).format('DD/MM/yyyy hh:mm:ss')}
                    </p>
                    <p className='list-item__sub-title'>
                      Model Id: {audit.modelId}
                    </p>
                    <p className='list-item__sub-title'>
                      Member:{' '}
                      {audit.member &&
                        audit.member.firstName + ' ' + audit.member.lastName}
                    </p>
                    <p className='list-item__sub-title'>
                      Client: {audit.member.client && audit.member.client.name}
                    </p>
                  </div>

                  <div className='list-header'>
                    <div>Results</div>
                  </div>
                  <div className='list-body'>
                    {audit.audit ? (
                      Object.entries(audit.audit).map(([key, value], index) => (
                        <div className='list-item' key={index}>
                          <p className='list-item__title'>
                            {key}: {value}
                          </p>
                        </div>
                      ))
                    ) : (
                      <div className='list-item list-item--message'>
                        No audit items found...
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className='list-item list-item--message'>
                No Audits found...
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

View_audit_usage.propTypes = {
  filteredAudits: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  filteredAudits: auditSelectors(state.audit),
});

export default connect(mapStateToProps)(View_audit_usage);
