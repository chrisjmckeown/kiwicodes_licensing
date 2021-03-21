import React from 'react';

const Main = (props) => {
  return (
    <main className='main'>
      <div className='main__content'>
        <div className='container body_margin' {...props}></div>
      </div>
    </main>
  );
};
export default Main;
