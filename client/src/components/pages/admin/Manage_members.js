import React from 'react';
import { Link } from 'react-router-dom';

const Manage_members = () => {
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
                    <span className='navigation_page'>Manage Members</span>
                  </div>
                </div>
                <div className='row'>
                  <div className='products'>
                    <h1>Manage Members</h1>
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
export default Manage_members;