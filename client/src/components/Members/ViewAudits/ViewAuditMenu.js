import React from 'react';
import { NavLink } from 'react-router-dom';

export const ViewAuditMenu = () => {
  return (
    <ul className='nav__Container'>
      <li className='nav__Item'>
        <NavLink to='/member_view_audits/' title='My Audits'>
          <div className='nav__image'>
            <i class='far fa-plus-square'></i>
          </div>
          <div className='nav__text'>My Audits</div>
        </NavLink>
      </li>
    </ul>
  );
};
export default ViewAuditMenu;
