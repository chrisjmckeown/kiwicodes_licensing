import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminSubMenu = ({ nav, item }) => {
  return (
    <ul className={nav}>
      <li className={item}>
        <NavLink to='/admin_manage_licensekeys/list'>
          MANAGE LICENSE KEYS
        </NavLink>
      </li>
      <li className={item}>
        <NavLink to='/admin_manage_members/list'>MANAGE MEMBERS</NavLink>
      </li>
      <li className={item}>
        <NavLink to='/admin_view_product_usage'>VIEW PRODUCT USAGE</NavLink>
      </li>
      <li className={item}>
        <NavLink to='/admin_view_app_usage'>VIEW APP USAGE</NavLink>
      </li>
      <li className={item}>
        <NavLink to='/admin_view_audits/raw_data'>VIEW AUDITS</NavLink>
      </li>
    </ul>
  );
};

export default AdminSubMenu;
