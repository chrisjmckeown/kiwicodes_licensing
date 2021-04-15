import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/authActions';
import KCAdminSubMenu from './KCAdminSubMenu';
import AdminSubMenu from './AdminSubMenu';
import MemberSubMenu from './MemberSubMenu';

import logo_header from '../../assets/img/logo_header.png';

const Header = ({
  auth: { isAuthenticated, permissionLevel, loading },
  logout,
}) => {
  const authLinks = (
    <ul>
      <li>
        <Link
          to='/my_account/my_details'
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
      <KCAdminSubMenu
        nav={'header__secondaryNav'}
        item={'header__secondaryItem'}
      />
    </li>
  );

  const adminLinks = (
    <li className='header__primaryItem'>
      <NavLink to='/admin' title='ADMIN'>
        ADMIN
      </NavLink>
      <AdminSubMenu
        nav={'header__secondaryNav'}
        item={'header__secondaryItem'}
      />
    </li>
  );

  const memberLinks = (
    <li className='header__primaryItem'>
      <NavLink to='/members' title='MEMBERS'>
        MEMBERS
      </NavLink>
      <MemberSubMenu
        nav={'header__secondaryNav'}
        item={'header__secondaryItem'}
      />
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
                    {
                      // permissionLevel === 'kiwicodes' ||
                      permissionLevel === 'admin' && adminLinks
                    }
                  </>
                )}
                {!loading && (
                  <>
                    {
                      // permissionLevel === 'kiwicodes' ||
                      //   permissionLevel === 'admin' ||
                      permissionLevel === 'user' && memberLinks
                    }
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
