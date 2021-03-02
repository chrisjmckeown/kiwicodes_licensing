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
                  <Link
                    to='/'
                    title='Home'
                    className={window.location.pathname === '/' ? 'active' : ''}
                    onClick={() => {
                      window.location.href = '/';
                    }}
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    to='/products'
                    title='Products'
                    className={
                      window.location.pathname === '/products' ? 'active' : ''
                    }
                    onClick={() => {
                      window.location.href = '/products';
                    }}
                  >
                    PRODUCTS
                  </Link>
                </li>
                <div className='dropdown'>
                  <li>
                    <Link
                      to='/kc_admin'
                      title='KC Admin'
                      className={
                        window.location.pathname === '/kc_admin' ? 'active' : ''
                      }
                      onClick={() => {
                        window.location.href = '/kc_admin';
                      }}
                    >
                      KC ADMIN
                    </Link>
                  </li>
                  <div className='dropdown-content'>
                    <Link
                      to='/manage_clients'
                      className={
                        window.location.pathname === '/manage_clients'
                          ? 'active'
                          : ''
                      }
                      onClick={() => {
                        window.location.href = '/manage_clients';
                      }}
                    >
                      MANAGE CLIENTS
                    </Link>
                    <Link
                      to='/manage_members'
                      className={
                        window.location.pathname === '/manage_members'
                          ? 'active'
                          : ''
                      }
                      onClick={() => {
                        window.location.href = '/manage_members';
                      }}
                    >
                      MANAGE MEMBERS
                    </Link>
                    <Link
                      to='/manage_products'
                      className={
                        window.location.pathname === '/manage_products'
                          ? 'active'
                          : ''
                      }
                      onClick={() => {
                        window.location.href = '/manage_products';
                      }}
                    >
                      MANAGE PRODUCTS
                    </Link>
                    <Link
                      to='/manage_apps'
                      className={
                        window.location.pathname === '/manage_apps'
                          ? 'active'
                          : ''
                      }
                      onClick={() => {
                        window.location.href = '/manage_apps';
                      }}
                    >
                      MANAGE APPS
                    </Link>
                    <Link
                      to='/manage_errors'
                      className={
                        window.location.pathname === '/manage_errors'
                          ? 'active'
                          : ''
                      }
                      onClick={() => {
                        window.location.href = '/manage_errors';
                      }}
                    >
                      MANAGE ERRORS
                    </Link>
                    <Link
                      to='/view_product_usage'
                      className={
                        window.location.pathname === '/view_product_usage'
                          ? 'active'
                          : ''
                      }
                      onClick={() => {
                        window.location.href = '/view_product_usage';
                      }}
                    >
                      VIEW PRODUCT USAGE
                    </Link>
                    <Link
                      to='/view_app_usage'
                      className={
                        window.location.pathname === '/view_app_usage'
                          ? 'active'
                          : ''
                      }
                      onClick={() => {
                        window.location.href = '/view_app_usage';
                      }}
                    >
                      VIEW APP USAGE
                    </Link>
                    <Link
                      to='/view_audits'
                      className={
                        window.location.pathname === '/view_audits'
                          ? 'active'
                          : ''
                      }
                      onClick={() => {
                        window.location.href = '/view_audits';
                      }}
                    >
                      VIEW AUDITS
                    </Link>
                  </div>
                </div>
                <div className='dropdown'>
                  <li>
                    <Link
                      to='/admin'
                      title='ADMIN'
                      className={
                        window.location.pathname === '/admin' ? 'active' : ''
                      }
                      onClick={() => {
                        window.location.href = '/admin';
                      }}
                    >
                      ADMIN
                    </Link>
                  </li>
                  <div className='dropdown-content'>
                    <Link
                      to='/admin_Manage_license_keys'
                      className={
                        window.location.pathname ===
                        '/admin_Manage_license_keys'
                          ? 'active'
                          : ''
                      }
                      onClick={() => {
                        window.location.href = '/admin_Manage_license_keys';
                      }}
                    >
                      MANAGE LICENSE KEYS
                    </Link>
                    <Link
                      to='/admin_Manage_members'
                      className={
                        window.location.pathname === '/admin_Manage_members'
                          ? 'active'
                          : ''
                      }
                      onClick={() => {
                        window.location.href = '/admin_Manage_members';
                      }}
                    >
                      MANAGE MEMBERS
                    </Link>
                    <Link
                      to='/admin_view_product_usage'
                      className={
                        window.location.pathname === '/admin_view_product_usage'
                          ? 'active'
                          : ''
                      }
                      onClick={() => {
                        window.location.href = '/admin_view_product_usage';
                      }}
                    >
                      VIEW PRODUCT USAGE
                    </Link>
                    <Link
                      to='/admin_view_app_usage'
                      className={
                        window.location.pathname === '/admin_view_app_usage'
                          ? 'active'
                          : ''
                      }
                      onClick={() => {
                        window.location.href = '/admin_view_app_usage';
                      }}
                    >
                      VIEW APP USAGE
                    </Link>
                    <Link
                      to='/admin_view_audits'
                      className={
                        window.location.pathname === '/admin_view_audits'
                          ? 'active'
                          : ''
                      }
                      onClick={() => {
                        window.location.href = '/admin_view_audits';
                      }}
                    >
                      VIEW AUDITS
                    </Link>
                  </div>
                </div>
                <div className='dropdown'>
                  <li>
                    <Link
                      to='/members'
                      title='MEMBERS'
                      className={
                        window.location.pathname === '/members' ? 'active' : ''
                      }
                      onClick={() => {
                        window.location.href = '/members';
                      }}
                    >
                      MEMBERS
                    </Link>
                  </li>
                  <div className='dropdown-content'>
                    <Link
                      to='/member_view_product_usage'
                      className={
                        window.location.pathname ===
                        '/member_view_product_usage'
                          ? 'active'
                          : ''
                      }
                      onClick={() => {
                        window.location.href = '/member_view_product_usage';
                      }}
                    >
                      VIEW PRODUCT USAGE
                    </Link>
                    <Link
                      to='/member_view_app_usage'
                      className={
                        window.location.pathname === '/member_view_app_usage'
                          ? 'active'
                          : ''
                      }
                      onClick={() => {
                        window.location.href = '/member_view_app_usage';
                      }}
                    >
                      VIEW APP USAGE
                    </Link>
                    <Link
                      to='/member_view_audits'
                      className={
                        window.location.pathname === '/member_view_audits'
                          ? 'active'
                          : ''
                      }
                      onClick={() => {
                        window.location.href = '/member_view_audits';
                      }}
                    >
                      VIEW AUDITS
                    </Link>
                  </div>
                </div>
                <li>
                  <Link
                    to='/licensing_test'
                    title='LICENSING TEST'
                    className={
                      window.location.pathname === '/licensing_test'
                        ? 'active'
                        : ''
                    }
                    onClick={() => {
                      window.location.href = '/licensing_test';
                    }}
                  >
                    TESTING
                  </Link>
                </li>
                <li>
                  <Link
                    to='/contact'
                    title='Contact us'
                    className={
                      window.location.pathname === '/contact' ? 'active' : ''
                    }
                    onClick={() => {
                      window.location.href = '/contact';
                    }}
                  >
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
