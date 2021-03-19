import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const ProductItem = ({
  product: { id, name, description, purchaseLink, helpLink, imageLink },
  auth: { loading, isAuthenticated, permissionLevel },
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
              </div>
              <div className='col8 lg'>
                <div className='container align_content_start'>
                  <div className='row'>
                    <h3>
                      <a
                        href={purchaseLink}
                        title='Bonus Tools'
                        target='_blank'
                        rel='noreferrer'
                      >
                        {name}
                      </a>
                    </h3>
                  </div>
                  <div className='row'>
                    <p className='product__desc'>
                      <a href={purchaseLink} target='_blank' rel='noreferrer'>
                        {description}{' '}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className='col align_items_center justify_content_center lg'>
                <div>
                  <a
                    href={helpLink}
                    className='button__std'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='button__std'>View Help</div>
                  </a>
                  <a
                    href={helpLink}
                    className='button__std'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='button__std'>View Comments</div>
                  </a>
                  {isAuthenticated &&
                  !loading &&
                  permissionLevel === 'kiwicodes' ? (
                    <>
                      <a
                        href={helpLink}
                        className='button__std'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <div className='button__std'> View Product Apps</div>
                      </a>
                      <Link className='button__std' to={`/product_edit/${id}`}>
                        <div className='button__std'>Edit Product</div>
                      </Link>
                    </>
                  ) : undefined}
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

ProductItem.propTypes = {
  auth: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(ProductItem);
