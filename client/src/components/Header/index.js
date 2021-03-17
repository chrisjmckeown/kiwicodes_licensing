import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

import logo_header from '../../assets/img/logo_header.png';

const Header = ({
  auth: { isAuthenticated, permissionLevel, loading },
  logout,
}) => {
  const authLinks = (
    <ul>
      <li>
        <Link
          to='/my_account'
          title='My Account'
          className='header__my-account'
        >
          Your Account
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!' title='Logout' className='header__login'>
          Logout
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <span>
          Welcome,
          <Link to='/login' title='Log in' className='header__login'>
            {' '}
            (log in)
          </Link>
        </span>
      </li>
    </ul>
  );

  const kiwicodesLinks = (
    <li className='header__primaryItem'>
      <NavLink to='/kc_admin' title='KC'>
        KC
      </NavLink>
      <ul className='header__secondaryNav'>
        <li className='header__secondaryItem'>
          <NavLink to='/manage_clients'>MANAGE CLIENTS</NavLink>
        </li>
        <li className='header__secondaryItem'>
          <NavLink to='/manage_members'>MANAGE MEMBERS</NavLink>
        </li>
        <li className='header__secondaryItem'>
          <NavLink to='/manage_products'>MANAGE PRODUCTS</NavLink>
        </li>
        <li className='header__secondaryItem'>
          <NavLink to='/manage_apps'>MANAGE APPS</NavLink>
        </li>
        <li className='header__secondaryItem'>
          <NavLink to='/manage_errors'>MANAGE ERRORS</NavLink>
        </li>
        <li className='header__secondaryItem'>
          <NavLink to='/view_product_usage'>VIEW PRODUCT USAGE</NavLink>
        </li>
        <li className='header__secondaryItem'>
          <NavLink to='/view_app_usage'>VIEW APP USAGE</NavLink>
        </li>
        <li className='header__secondaryItem'>
          <NavLink to='/view_audits'>VIEW AUDITS</NavLink>
        </li>
      </ul>
    </li>
  );

  const adminLinks = (
    <li className='header__primaryItem'>
      <NavLink to='/admin' title='ADMIN'>
        ADMIN
      </NavLink>
      <ul className='header__secondaryNav'>
        <li className='header__secondaryItem'>
          <NavLink to='/admin_Manage_license_keys'>MANAGE LICENSE KEYS</NavLink>
        </li>
        <li className='header__secondaryItem'>
          <NavLink to='/admin_Manage_members'>MANAGE MEMBERS</NavLink>
        </li>
        <li className='header__secondaryItem'>
          <NavLink to='/admin_view_product_usage'>VIEW PRODUCT USAGE</NavLink>
        </li>
        <li className='header__secondaryItem'>
          <NavLink to='/admin_view_app_usage'>VIEW APP USAGE</NavLink>
        </li>
        <li className='header__secondaryItem'>
          <NavLink to='/admin_view_audits'>VIEW AUDITS</NavLink>
        </li>
      </ul>
    </li>
  );

  const memberLinks = (
    <li className='header__primaryItem'>
      <NavLink to='/members' title='MEMBERS'>
        MEMBERS
      </NavLink>
      <ul className='header__secondaryNav'>
        <li className='header__secondaryItem'>
          <NavLink to='/member_view_product_usage'>VIEW PRODUCT USAGE</NavLink>
        </li>
        <li className='header__secondaryItem'>
          <NavLink to='/member_view_app_usage'>VIEW APP USAGE</NavLink>
        </li>
        <li className='header__secondaryItem'>
          <NavLink to='/member_view_audits'>VIEW AUDITS</NavLink>
        </li>
      </ul>
    </li>
  );

  const myFunction = () => {
    var x = document.getElementById('header__primaryNav');
    if (x.className === 'header__primaryNav') {
      x.className += ' responsive';
    } else {
      x.className = 'header__primaryNav';
    }
  };

  return (
    <header className='header'>
      <div className='container'>
        <div className='row align_items_end'>
          <div className='col7'>
            <div className='header__logo'>
              <Link to='/' title='Kiwi Codes Solutions Ltd'>
                <img src={logo_header} alt='Kiwi Codes Solutions Ltd'></img>
              </Link>
            </div>
          </div>
          <div className='col'>
            <div className='header__account'>
              {!loading && <> {isAuthenticated ? authLinks : guestLinks} </>}
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <div className='header__menu'>
              <ul className='header__primaryNav' id='header__primaryNav'>
                <li className='header__primaryItem'>
                  <NavLink exact to='/' title='Home'>
                    HOME
                  </NavLink>
                </li>
                <li className='header__primaryItem'>
                  <NavLink to='/products' title='Products'>
                    PRODUCTS
                  </NavLink>
                </li>
                {!loading && (
                  <> {permissionLevel === 'kiwicodes' && kiwicodesLinks} </>
                )}
                {!loading && (
                  <>
                    {(permissionLevel === 'kiwicodes' ||
                      permissionLevel === 'admin') &&
                      adminLinks}
                  </>
                )}
                {!loading && (
                  <>
                    {(permissionLevel === 'kiwicodes' ||
                      permissionLevel === 'admin' ||
                      permissionLevel === 'user') &&
                      memberLinks}
                  </>
                )}
                <li className='header__primaryItem'>
                  <NavLink to='/licensing_test' title='LICENSING TEST'>
                    TESTING
                  </NavLink>
                </li>
                <li className='header__primaryItem'>
                  <NavLink to='/contact' title='Contact us'>
                    CONTACT
                  </NavLink>
                </li>
                <li className='header__icon' onClick={myFunction}>
                  <i className='fa fa-bars'></i>
                </li>
              </ul>
              {/* <ul className='topnav' id='myTopnav'>
                <li href='#home' class='active'>
                  Home
                </li>
                <li className='primarynav' href='#news'>
                  News
                </li>
                <li className='primarynav' href='#contact'>
                  Contact
                  <ul className='subnav'>
                    <li href='#news'>News</li>
                    <li href='#contact'>Contact</li>
                    <li href='#about'>About</li>
                  </ul>
                </li>
                <li className='primarynav' href='#about'>
                  About
                </li>
                <li className='icon' onClick={myFunction}>
                  <i className='fa fa-bars'></i>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
