import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminSubMenu = ({ nav, item }) => {
  return (
    <ul className={nav}>
      <li className={item}>
        <NavLink to='/admin_Manage_license_keys'>MANAGE LICENSE KEYS</NavLink>
      </li>
      <li className={item}>
        <NavLink to='/admin_Manage_members'>MANAGE MEMBERS</NavLink>
      </li>
      <li className={item}>
        <NavLink to='/admin_view_product_usage'>VIEW PRODUCT USAGE</NavLink>
      </li>
      <li className={item}>
        <NavLink to='/admin_view_app_usage'>VIEW APP USAGE</NavLink>
      </li>
      <li className={item}>
        <NavLink to='/admin_view_audits'>VIEW AUDITS</NavLink>
      </li>
    </ul>
  );
};

export default AdminSubMenu;
