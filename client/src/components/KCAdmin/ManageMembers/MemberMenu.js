import React from 'react';
import { NavLink } from 'react-router-dom';

export const MemberMenu = () => {
  return (
    <ul className='nav__Container'>
      <li className='nav__Item'>
        <NavLink to='/manage_members/list' title='Manage Members'>
          <div className='nav__image'>
            <i className='far fa-plus-square'></i>
          </div>
          <div className='nav__text'>Manage</div>
        </NavLink>
      </li>
      <li className='nav__Item'>
        <NavLink to='/manage_members/create' title='Create Member'>
          <div className='nav__image'>
            <i className='far fa-plus-square'></i>
          </div>
          <div className='nav__text'>Create Member</div>
        </NavLink>
      </li>
    </ul>
  );
};
export default MemberMenu;
