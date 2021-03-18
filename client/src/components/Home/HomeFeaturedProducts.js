import React from 'react';

export const HomeFeaturedProducts = ({
  productName,
  productLink,
  productImage,
}) => (
  <div className='homefeatured'>
    <div>
      <h4>
        <a href={productLink} title={productName}>
          {productName}
        </a>
      </h4>
    </div>
    <div>
      <a href={productLink} title={productName} className='product_image'>
        <img src={productImage} alt={productName}></img>
      </a>
    </div>
    <div className='row'>
      <div className='col justify_content_center'>
        <div className='product__button'>
          <a href={productLink} className='product__view-button' title='View'>
            View
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default HomeFeaturedProducts;
