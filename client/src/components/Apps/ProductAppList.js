import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Alert from '../Alert';
import Breadcrumb from '../Breadcrumb';
import PageHeader from '../PageHeader';
import { getApps } from '../../actions/appActions';
import { filter } from '../../selectors/appSelectors';
import ProductAppItem from './ProductAppItem';
import Spinner from '../Spinner';

export const ProductAppList = ({
  getApps,
  app: { loading },
  filteredApps,
  filteredProduct,
  product,
  ...props
}) => {
  useEffect(() => {
    getApps();
  }, [getApps]);
  return (
    <>
      <Breadcrumb breadCrumbs={['Products']} endPage={'Product Apps'} />
      <PageHeader pageName={'Product Apps'} />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className='row lg'>
            <div className='col12 lg'>
              <div className='list-header'>
                <div>
                  Product apps for {filteredProduct && filteredProduct[0].name}
                </div>
              </div>
              <div className='list-body'>
                {filteredApps.length > 0 ? (
                  filteredApps.map((app) => (
                    <ProductAppItem key={app.id} app={app} />
                  ))
                ) : (
                  <div className='list-item list-item--message'>
                    No apps found...
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
      <Alert />
    </>
  );
};

ProductAppList.propTypes = {
  app: PropTypes.object.isRequired,
  getApps: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  app: state.app,
  product: state.product.products,
  filteredApps: filter(state.app.apps, props.match.params.id),
  filteredProduct: state.product.products.filter(
    (product) => product.id.toString() === props.match.params.id
  ),
});
export default connect(mapStateToProps, { getApps })(ProductAppList);
