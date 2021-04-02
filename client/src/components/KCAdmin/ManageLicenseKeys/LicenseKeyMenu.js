import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const LicenseKeyMenu = () => {
  return (
    <ul className='nav__Container'>
      <li className='nav__Item'>
        <NavLink to='/manage_licensekeys/list' title='Manage'>
          <div className='nav__image'>
            <i className='far fa-plus-square'></i>
          </div>
          <div className='nav__text'>Manage</div>
        </NavLink>
      </li>
      <li className='nav__Item'>
        <NavLink to='/manage_licensekeys/create' title='Create'>
          <div className='nav__image'>
            <i className='far fa-plus-square'></i>
          </div>
          <div className='nav__text'>Create</div>
        </NavLink>
      </li>
      <li className='nav__Item'>
        <Link to='/manage_licensekeys/list' title='Clear Filters'>
          <div className='nav__image'>
            <i className='far fa-plus-square'></i>
          </div>
          <div className='nav__text'>Clear Filters</div>
        </Link>
      </li>
    </ul>
  );
};
export default LicenseKeyMenu;
