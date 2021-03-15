import React from 'react';
import { Link } from 'react-router-dom';

const View_app_usage = () => {
  return (
    <main className='main'>
      <div className='main_content'>
        <div className='container'>
          <div className='row body_margin'>
            <div className='col'>
              <div className='container'>
                <div className='row'>
                  <div className='breadcrumb'>
                    <Link to='/' title='return to Home'>
                      Home
                    </Link>
                    <span className='navigation-pipe'>&gt;</span>
                    <Link to='/admin' title='return to Admin'>
                      Admin
                    </Link>
                    <span className='navigation-pipe'>&gt;</span>
                    <span className='navigation_page'>View App Usage</span>
                  </div>
                </div>
                <div className='row'>
                  <div className='products'>
                    <h1>View App Usage</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default View_app_usage;
