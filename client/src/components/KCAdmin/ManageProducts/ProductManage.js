import React from 'react';
import { Link } from 'react-router-dom';

export const ProductManage = () => {
  return (
    <div className='row'>
      <Link className='button__std' to={'/product_create/'}>
        Create Product
      </Link>
    </div>
  );
};

export default ProductManage;
