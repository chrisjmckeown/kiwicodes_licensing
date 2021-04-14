import React from 'react';
import Moment from 'moment';

const View_product_usage = ({ productActivations }) => {
  return (
    <>
      <div className='row lg'>
        <div className='col12 lg'>
          <div className='list-body'>
            {productActivations.length > 0 ? (
              productActivations.map((productActivation) => (
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

export default View_product_usage;
