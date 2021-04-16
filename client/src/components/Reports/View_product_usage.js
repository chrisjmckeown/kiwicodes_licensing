import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { productSelectors } from '../../selectors/productSelectors';
import ViewProductUsageSearch from './View_product_usage_search';

const View_product_usage = ({ filteredProducts, premissionLevel }) => {
  return (
    <>
      <ViewProductUsageSearch premissionLevel={premissionLevel} />
      <div className='row lg'>
        <div className='search-results'>
          Results: {filteredProducts.length.toString()}
        </div>
      </div>
      <div className='row lg'>
        <div className='col12 lg'>
          <div className='list-body'>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((productActivation) => (
                <div className='list-item' key={productActivation.id}>
                  <p className='list-item__title'>
                    {Moment(productActivation.dateActivated).format(
                      'DD/MM/yyyy hh:mm:ss'
                    )}
                    {' - '}
                    {productActivation.dateReleased
                      ? Moment(productActivation.dateReleased).format(
                          'DD/MM/yyyy hh:mm:ss'
                        )
                      : 'Active'}
                  </p>
                  <p className='list-item__sub-title'>
                    PC ID: {productActivation.pcID} Product name:{' '}
                    {productActivation.product &&
                      productActivation.product.name}{' '}
                    Member name:{' '}
                    {productActivation.member &&
                      productActivation.member.firstName +
                        ' ' +
                        productActivation.member.lastName}{' '}
                    Company name:{' '}
                    {productActivation.member.client &&
                      productActivation.member.client.name}
                  </p>
                </div>
              ))
            ) : (
              <div className='list-item list-item--message'>
                No Products found...
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

View_product_usage.propTypes = {
  filteredProducts: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  filteredProducts: productSelectors(state.productActivation),
});

export default connect(mapStateToProps)(View_product_usage);
