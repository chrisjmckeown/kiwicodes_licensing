import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const AppMenu = () => {
  return (
    <ul className='nav__Container'>
      <li className='nav__Item'>
        <NavLink to='/manage_apps/list' title='Manage Apps'>
          <div className='nav__image'>
            <i className='far fa-plus-square'></i>
          </div>
          <div className='nav__text'>Manage</div>
        </NavLink>
      </li>
      <li className='nav__Item'>
        <NavLink to='/manage_apps/create' title='Create'>
          <div className='nav__image'>
            <i className='far fa-plus-square'></i>
          </div>
          <div className='nav__text'>Create</div>
        </NavLink>
      </li>
      <li className='nav__Item'>
        <NavLink to='/manage_apps/bulkAdd' title='Bulk Add'>
          <div className='nav__image'>
            <i className='far fa-plus-square'></i>
          </div>
          <div className='nav__text'>Bulk Add</div>
        </NavLink>
      </li>
      <li className='nav__Item'>
        <Link to='/manage_apps/list' title='Clear Filters'>
          <div className='nav__image'>
            <i className='far fa-plus-square'></i>
          </div>
          <div className='nav__text'>Clear Filters</div>
        </Link>
      </li>
    </ul>
  );
};
export default AppMenu;
