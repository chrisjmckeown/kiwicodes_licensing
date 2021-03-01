import React from 'react';
import logo_header from '../../assets/img/logo_header.png';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='row align_items_end'>
          <div className='col7'>
            <div className='header_logo'>
              <a href='index.html' title='Kiwi Codes Solutions Ltd'>
                <img src={logo_header} alt='Kiwi Codes Solutions Ltd'></img>
              </a>
            </div>
          </div>
          <div className='col'>
            <div className='header_account'>
              <ul>
                <li>
                  <span>
                    {' '}
                    Welcome,
                    <a className='login' href='login.html' title='Log in'>
                      (log in)
                    </a>
                  </span>
                </li>
                <li>
                  <a
                    className='my_account'
                    href='my_account.html'
                    title='My Account'
                  >
                    Your Account
                  </a>
                </li>
                <li>
                  <a
                    className='members_area'
                    href='members_area.html'
                    title='Members Area'
                  >
                    Members Area
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <div className='header_menu'>
              <ul>
                <li>
                  <a href='index.html' title='Home'>
                    HOME
                  </a>
                </li>
                <li>
                  <a href='products.html' title='Products' className='active'>
                    PRODUCTS
                  </a>
                </li>
                <li>
                  <a href='members.html' title='Members'>
                    MEMBERS
                  </a>
                </li>
                <li>
                  <a href='errors.html' title='Errors'>
                    ERRORS
                  </a>
                </li>
                <li>
                  <a href='contact-us.html' title='Contact us'>
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
