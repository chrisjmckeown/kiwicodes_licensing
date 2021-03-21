import React from 'react';
import { NavLink } from 'react-router-dom';

const KCAdminSubMenu = ({ nav, item }) => {
  return (
    <ul className={nav}>
      <li className={item}>
        <NavLink to='/manage_clients'>MANAGE CLIENTS</NavLink>
      </li>
      <li className={item}>
        <NavLink to='/manage_members'>MANAGE MEMBERS</NavLink>
      </li>
      <li className={item}>
        <NavLink to='/manage_products'>MANAGE PRODUCTS</NavLink>
      </li>
      <li className={item}>
        <NavLink to='/manage_apps'>MANAGE APPS</NavLink>
      </li>
      <li className={item}>
        <NavLink to='/manage_errors'>MANAGE ERRORS</NavLink>
      </li>
      <li className={item}>
        <NavLink to='/view_product_usage'>VIEW PRODUCT USAGE</NavLink>
      </li>
      <li className={item}>
        <NavLink to='/view_app_usage'>VIEW APP USAGE</NavLink>
      </li>
      <li className={item}>
        <NavLink to='/view_audits'>VIEW AUDITS</NavLink>
      </li>
    </ul>
  );
};

export default KCAdminSubMenu;
