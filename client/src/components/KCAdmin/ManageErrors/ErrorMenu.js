import React from 'react';
import { NavLink } from 'react-router-dom';

export const ErrorMenu = () => {
  return (
    <ul className='nav__Container'>
      <li className='nav__Item'>
        <NavLink to='/manage_errors/list' title='Manage Errors'>
          <div className='nav__image'>
            <i className='far fa-plus-square'></i>
          </div>
          <div className='nav__text'>Manage</div>
        </NavLink>
      </li>
      <li className='nav__Item'>
        <NavLink to='/manage_errors/create' title='Create Error'>
          <div className='nav__image'>
            <i className='far fa-plus-square'></i>
          </div>
          <div className='nav__text'>Create Error</div>
        </NavLink>
      </li>
    </ul>
  );
};
export default ErrorMenu;
