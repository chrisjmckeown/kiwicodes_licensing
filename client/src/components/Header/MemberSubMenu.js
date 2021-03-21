import React from 'react';
import { NavLink } from 'react-router-dom';

const MemberSubMenu = ({ nav, item }) => {
  return (
    <ul className={nav}>
      <li className={item}>
        <NavLink to='/member_view_product_usage'>VIEW PRODUCT USAGE</NavLink>
      </li>
      <li className={item}>
        <NavLink to='/member_view_app_usage'>VIEW APP USAGE</NavLink>
      </li>
      <li className={item}>
        <NavLink to='/member_view_audits'>VIEW AUDITS</NavLink>
      </li>
    </ul>
  );
};

export default MemberSubMenu;
