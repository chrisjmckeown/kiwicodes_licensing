import React from 'react';

const Home = () => {
  return (
    <main className='main'>
      <div className='main_content'>
        <div className='container'>
          <div className='row body_margin'>
            <div className='col'>
              <div className='container'>
                <div className='row'>
                  <div className='breadcrumb'>
                    <a href='index.html' title='return to Home'>
                      Home
                    </a>
                    <span className='navigation-pipe'>&gt;</span>
                  </div>
                </div>
                <div className='row'>Home Page</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='columns_footer'></div>
    </main>
  );
};
export default Home;
