import React from 'react';

const AppItem = ({ app }) => {
  const activateApp = () => {
    console.log('activate app', app.id, app.name);
  };
  return (
    <>
      <div key={app.id}>
        <div>{app.name}</div>
        <button className='btn' onClick={activateApp}>
          Activate App
        </button>
      </div>
    </>
  );
};

export default AppItem;
