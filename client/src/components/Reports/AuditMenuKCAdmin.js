import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const AuditMenuKCAdmin = () => {
  return (
    <ul className='nav__Container'>
      <li className='nav__Item'>
        <NavLink to='/kcadmin_view_audits/raw_data' title='Raw data'>
          <div className='nav__image'>
            <i className='far fa-plus-square'></i>
          </div>
          <div className='nav__text'>Raw data</div>
        </NavLink>
      </li>
      <li className='nav__Item'>
        <NavLink to='/kcadmin_view_audits/links' title='Links'>
          <div className='nav__image'>
            <i className='far fa-plus-square'></i>
          </div>
          <div className='nav__text'>Links</div>
        </NavLink>
      </li>
      <li className='nav__Item'>
        <Link to='/kcadmin_view_audits/warnings' title='Warnings'>
          <div className='nav__image'>
            <i className='far fa-plus-square'></i>
          </div>
          <div className='nav__text'>Warnings</div>
        </Link>
      </li>
      <li className='nav__Item'>
        <NavLink to='/kcadmin_view_audits/views' title='Views'>
          <div className='nav__image'>
            <i className='far fa-plus-square'></i>
          </div>
          <div className='nav__text'>Views</div>
        </NavLink>
      </li>
    </ul>
  );
};
export default AuditMenuKCAdmin;
