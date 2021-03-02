import React from 'react';
import { Link } from 'react-router-dom';
import logo_header from '../../assets/img/logo_header.png';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='row align_items_end'>
          <div className='col7'>
            <div className='header_logo'>
              <Link to='/' title='Kiwi Codes Solutions Ltd'>
                <img src={logo_header} alt='Kiwi Codes Solutions Ltd'></img>
              </Link>
            </div>
          </div>
          <div className='col'>
            <div className='header_account'>
              <ul>
                <li>
                  <span>
                    {' '}
                    Welcome,
                    <Link className='login' to='/login' title='Log in'>
                      (log in)
                    </Link>
                  </span>
                </li>
                <li>
                  <Link
                    className='my_account'
                    to='/my_account'
                    title='My Account'
                  >
                    Your Account
                  </Link>
                </li>
                <li>
                  <Link
                    className='members_area'
                    to='/members_area'
                    title='Members Area'
                  >
                    Members Area
                  </Link>
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
                  <Link to='/' title='Home'>
                    HOME
                  </Link>
                </li>
                <li>
                  <Link to='/products' title='Products' className='active'>
                    PRODUCTS
                  </Link>
                </li>
                <div className='dropdown'>
                  <li>
                    <Link to='/kc_admin' title='KC Admin'>
                      KC ADMIN
                    </Link>
                  </li>
                  <div className='dropdown-content'>
                    <Link to='/manage_clients'>MANAGE CLIENTS</Link>
                    <Link to='/manage_members'>MANAGE MEMBERS</Link>
                    <Link to='/manage_products'>MANAGE PRODUCTS</Link>
                    <Link to='/manage_apps'>MANAGE APPS</Link>
                    <Link to='/manage_errors'>MANAGE ERRORS</Link>
                    <Link to='/view_product_usage'>VIEW PRODUCT USAGE</Link>
                    <Link to='/view_app_usage'>VIEW APP USAGE</Link>
                    <Link to='/view_audits'>VIEW AUDITS</Link>
                  </div>
                </div>
                <div className='dropdown'>
                  <li>
                    <Link to='/admin' title='ADMIN'>
                      ADMIN
                    </Link>
                  </li>
                  <div className='dropdown-content'>
                    <Link to='/admin_Manage_license_keys'>
                      MANAGE LICENSE KEYS
                    </Link>
                    <Link to='/admin_Manage_members'>MANAGE MEMBERS</Link>
                    <Link to='/admin_view_product_usage'>
                      VIEW PRODUCT USAGE
                    </Link>
                    <Link to='/admin_view_app_usage'>VIEW APP USAGE</Link>
                    <Link to='/admin_view_audits'>VIEW AUDITS</Link>
                  </div>
                </div>
                <div className='dropdown'>
                  <li>
                    <Link to='/members' title='MEMBERS'>
                      MEMBERS
                    </Link>
                  </li>
                  <div className='dropdown-content'>
                    <Link to='/member_view_product_usage'>
                      VIEW PRODUCT USAGE
                    </Link>
                    <Link to='/member_view_app_usage'>VIEW APP USAGE</Link>
                    <Link to='/member_view_audits'>VIEW AUDITS</Link>
                  </div>
                </div>
                <li>
                  <Link to='/licensing_test' title='LICENSING TEST'>
                    TESTING
                  </Link>
                </li>
                <li>
                  <Link to='/contact' title='Contact us'>
                    CONTACT
                  </Link>
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
