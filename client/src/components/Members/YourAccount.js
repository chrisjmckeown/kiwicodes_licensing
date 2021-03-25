import React from 'react';
import { NavLink } from 'react-router-dom';

export const YourAccount = () => {
  return (
    <ul className='nav__Container'>
      <li className='nav__Item'>
        <NavLink to='/my_account/my_details' title='My Details'>
          <div className='nav__image'>
            <i className='fas fa-pencil-alt'></i>
          </div>
          <div className='nav__text'>My Details</div>
        </NavLink>
      </li>
      <li className='nav__Item'>
        <NavLink to='/my_account/my_password' title='My Password'>
          <div className='nav__image'>
            <i className='fas fa-key'></i>
          </div>
          <div className='nav__text'>Password</div>
        </NavLink>
      </li>
      <li className='nav__Item'>
        <NavLink to='/my_account/my_profile' title='My Profile'>
          <div className='nav__image'>
            <i className='fas fa-user'></i>
          </div>
          <div className='nav__text'>My Profile</div>
        </NavLink>
      </li>
    </ul>
  );
};
export default YourAccount;
