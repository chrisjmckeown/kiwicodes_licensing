import React from 'react';

export const Product = ({
  product: { name, description, purchaseLink, helpLink, imageLink },
}) => {
  return (
    <div className='row'>
      <ul className='product__list'>
        <li>
          <div className='container'>
            <div className='row lg'>
              <div className='col2 lg'>
                <a
                  href={purchaseLink}
                  className='product__img-link'
                  alt={name + ' | Products | Home'}
                >
                  <img
                    id='image_comb'
                    src={imageLink}
                    alt={name + ' | Products | Home'}
                  ></img>
                </a>
              </div>
              <div className='col8 lg'>
                <div className='container align_content_start'>
                  <div className='row'>
                    <h3>
                      <a href={purchaseLink} title='Bonus Tools'>
                        {name}
                      </a>
                    </h3>
                  </div>
                  <div className='row'>
                    <p className='product__desc'>
                      <a href={purchaseLink}>{description}</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className='col align_items_center justify_content_center lg'>
                <div>
                  <div className='product__button'>
                    <a href={helpLink} className='product__view-button'>
                      View Help
                    </a>
                  </div>
                  <div className='product__button'>
                    <a href={helpLink} className='product__view-button'>
                      View Comments
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Product;
