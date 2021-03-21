import React from 'react';

export const ProductItem = ({
  product: { id, name, description, purchaseLink, helpLink, imageLink },
}) => {
  return (
    <div className='row'>
      <ul className='product__list'>
        <li>
          <div className='container'>
            <div className='row lg'>
              <div className='col2 lg'>
                {imageLink && (
                  <a
                    href={purchaseLink}
                    target='_blank'
                    rel='noreferrer'
                    className='product__img-link'
                    alt={name + ' | Products | Home'}
                  >
                    <img
                      id='image_comb'
                      src={imageLink}
                      alt={name + ' | Products | Home'}
                    ></img>
                  </a>
                )}
              </div>
              <div className='col8 lg'>
                <div className='container align_content_start'>
                  <div className='row'>
                    {purchaseLink ? (
                      <h3>
                        <a
                          href={purchaseLink}
                          title='Bonus Tools'
                          target='_blank'
                          rel='noreferrer'
                          className='form__labelHeader'
                        >
                          {name}
                        </a>
                      </h3>
                    ) : (
                      <h3 className='form__labelHeader'>{name}</h3>
                    )}
                  </div>
                  <div className='row'>
                    <p className='product__desc'>{description}</p>
                  </div>
                </div>
              </div>
              <div className='col align_items_center justify_content_center lg'>
                <div>
                  {helpLink && (
                    <a
                      href={helpLink}
                      className='button__std'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <div className='button__std'>View Help</div>
                    </a>
                  )}
                  <a
                    href={helpLink}
                    className='button__std'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='button__std'>Product Chat</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProductItem;
