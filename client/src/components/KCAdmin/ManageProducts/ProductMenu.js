import React from 'react';
import { NavLink } from 'react-router-dom';

export const ErrorMenu = () => {
  return (
    <ul className='nav__Container'>
      <li className='nav__Item'>
        <NavLink to='/manage_products/list' title='Manage'>
          <div className='nav__image'>
            <i className='far fa-plus-square'></i>
          </div>
          <div className='nav__text'>Manage</div>
        </NavLink>
      </li>
      <li className='nav__Item'>
        <NavLink to='/manage_products/create' title='Create'>
          <div className='nav__image'>
            <i className='far fa-plus-square'></i>
          </div>
          <div className='nav__text'>Create</div>
        </NavLink>
      </li>
    </ul>
  );
};
export default ErrorMenu;
