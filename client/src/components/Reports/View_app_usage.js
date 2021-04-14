import React from 'react';
import Moment from 'moment';

const View_app_usage = ({ appActivations }) => {
  return (
    <>
      <div className='row lg'>
        <div className='col12 lg'>
          <div className='list-body'>
            {appActivations.length > 0 ? (
              appActivations.map((appActivation) => (
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
export default View_app_usage;
