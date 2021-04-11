import React from 'react';
import { NavLink } from 'react-router-dom';

const KCAdminSubMenu = ({ nav, item }) => {
  return (
    <ul className={nav}>
      <li className={item}>
        <NavLink to='/manage_clients/list'>MANAGE CLIENTS</NavLink>
      </li>
      <li className={item}>
        <NavLink to='/manage_licensekeys/list'>MANAGE LICENSES</NavLink>
      </li>
      <li className={item}>
        <NavLink to='/manage_members/list'>MANAGE MEMBERS</NavLink>
      </li>
      <li className={item}>
        <NavLink to='/manage_products/list'>MANAGE PRODUCTS</NavLink>
      </li>
      <li className={item}>
        <NavLink to='/manage_apps/list'>MANAGE APPS</NavLink>
      </li>
      <li className={item}>
        <NavLink to='/manage_builds/list'>MANAGE BUILDS</NavLink>
      </li>
      <li className={item}>
        <NavLink to='/manage_errors/list'>MANAGE ERRORS</NavLink>
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
