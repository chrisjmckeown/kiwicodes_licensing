import React from 'react';

const Main = (props) => {
  return (
    <main className='main'>
      <div className='main__content'>
        <div className='container'>
          <div className='row body_margin'>
            <div className='col'>
              <div className='container' {...props}></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Main;
