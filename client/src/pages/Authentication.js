import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Authentication/Login';
import Register from '../components/Authentication/Register';

const Authentication = () => {
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
                    <span className='navigation_page'>Login</span>
                  </div>
                </div>
                <div className='row'>
                  <div className='products'>
                    <h1>Login</h1>
                  </div>
                </div>
                <div className='row'>
                  <div className='col6'>
                    <Register />
                  </div>
                  <div className='col6'>
                    <Login />
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

export default Authentication;
