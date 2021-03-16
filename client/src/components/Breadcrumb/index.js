import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ breadCrumbs, endPage }) => {
  return (
    <div className='row'>
      <div className='breadcrumb'>
        <Link to='/'>Home</Link>
        {breadCrumbs.length > 0 &&
          breadCrumbs.map((breadcrumb, index) => (
            <div key={index}>
              <span className='breadcrumb__navigation-pipe'>&gt;</span>
              <Link to={`/${breadcrumb}`}>{breadcrumb}</Link>
            </div>
          ))}
        <span className='breadcrumb__navigation-pipe'>&gt;</span>
        <span className='breadcrumb__navigation-page'>{endPage}</span>
      </div>
    </div>
  );
};
export default Breadcrumb;
