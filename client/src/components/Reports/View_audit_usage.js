import React from 'react';
import Moment from 'moment';

const View_audit_usage = ({ audits }) => {
  return (
    <>
      <div className='row lg'>
        <div className='col12 lg'>
          <div className='list-body'>
            {audits.length > 0 ? (
              audits.map((audit, index) => (
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
                      Member Id: {audit.memberId}
                    </p>
                    <p className='list-item__sub-title'>
                      Client Id: {audit.clientId}
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

export default View_audit_usage;
