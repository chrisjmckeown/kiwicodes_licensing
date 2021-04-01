import React from 'react';
import { NavLink } from 'react-router-dom';

export const ClientMenu = () => {
  return (
    <ul className='nav__Container'>
      <li className='nav__Item'>
        <NavLink to='/manage_clients/' title='Manage Clients'>
          <div className='nav__image'>
            <i className='far fa-plus-square'></i>
          </div>
          <div className='nav__text'>Manage</div>
        </NavLink>
      </li>
      <li className='nav__Item'>
        <NavLink to='/client_create/' title='Create Client'>
          <div className='nav__image'>
            <i className='far fa-plus-square'></i>
          </div>
          <div className='nav__text'>Create Client</div>
        </NavLink>
      </li>
    </ul>
  );
};
export default ClientMenu;
