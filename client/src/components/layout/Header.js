import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
                    <Link
                      to='/login'
                      title='Log in'
                      className={
                        window.location.pathname === '/login'
                          ? 'active login'
                          : 'login'
                      }
                      onClick={() => {
                        window.location.href = '/login';
                      }}
                    >
                      (log in)
                    </Link>
                  </span>
                </li>
                <li>
                  <Link
                    to='/my_account'
                    title='My Account'
                    className={
                      window.location.pathname === '/my_account'
                        ? 'active my_account'
                        : 'my_account'
                    }
                    onClick={() => {
                      window.location.href = '/my_account';
                    }}
                  >
                    Your Account
                  </Link>
                </li>
                <li>
                  <Link
                    to='/members_area'
                    title='Members Area'
                    className={
                      window.location.pathname === '/members_area'
                        ? 'active members_area'
                        : 'members_area'
                    }
                    onClick={() => {
                      window.location.href = '/members_area';
                    }}
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
                  <NavLink exact to='/' title='Home'>
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/products' title='Products'>
                    PRODUCTS
                  </NavLink>
                </li>
                <div className='dropdown'>
                  <li>
                    <NavLink to='/kc_admin' title='KC Admin'>
                      KC ADMIN
                    </NavLink>
                  </li>
                  <div className='dropdown-content'>
                    <NavLink to='/manage_clients'>MANAGE CLIENTS</NavLink>
                    <NavLink to='/manage_members'>MANAGE MEMBERS</NavLink>
                    <NavLink to='/manage_products'>MANAGE PRODUCTS</NavLink>
                    <NavLink to='/manage_apps'>MANAGE APPS</NavLink>
                    <NavLink to='/manage_errors'>MANAGE ERRORS</NavLink>
                    <NavLink to='/view_product_usage'>
                      VIEW PRODUCT USAGE
                    </NavLink>
                    <NavLink to='/view_app_usage'>VIEW APP USAGE</NavLink>
                    <NavLink to='/view_audits'>VIEW AUDITS</NavLink>
                  </div>
                </div>
                <div className='dropdown'>
                  <li>
                    <NavLink to='/admin' title='ADMIN'>
                      ADMIN
                    </NavLink>
                  </li>
                  <div className='dropdown-content'>
                    <NavLink to='/admin_Manage_license_keys'>
                      MANAGE LICENSE KEYS
                    </NavLink>
                    <NavLink to='/admin_Manage_members'>MANAGE MEMBERS</NavLink>
                    <NavLink to='/admin_view_product_usage'>
                      VIEW PRODUCT USAGE
                    </NavLink>
                    <NavLink to='/admin_view_app_usage'>VIEW APP USAGE</NavLink>
                    <NavLink to='/admin_view_audits'>VIEW AUDITS</NavLink>
                  </div>
                </div>
                <div className='dropdown'>
                  <li>
                    <NavLink to='/members' title='MEMBERS'>
                      MEMBERS
                    </NavLink>
                  </li>
                  <div className='dropdown-content'>
                    <NavLink to='/member_view_product_usage'>
                      VIEW PRODUCT USAGE
                    </NavLink>
                    <NavLink to='/member_view_app_usage'>
                      VIEW APP USAGE
                    </NavLink>
                    <NavLink to='/member_view_audits'>VIEW AUDITS</NavLink>
                  </div>
                </div>
                <li>
                  <NavLink to='/licensing_test' title='LICENSING TEST'>
                    TESTING
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/contact' title='Contact us'>
                    CONTACT
                  </NavLink>
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
