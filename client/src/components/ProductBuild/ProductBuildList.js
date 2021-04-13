import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Alert from '../Alert';
import Breadcrumb from '../Breadcrumb';
import PageHeader from '../PageHeader';
import { getBuilds } from '../../actions/buildActions';
import { filter } from '../../selectors/buildSelectors';
import ProductBuildItem from './ProductBuildItem';
import Spinner from '../Spinner';

export const ProductBuildList = ({
  getBuilds,
  build: { loading },
  filteredBuilds,
  filteredProduct,
  product,
  ...props
}) => {
  useEffect(() => {
    getBuilds();
  }, [getBuilds]);
  console.log(product, filteredProduct[0].name, props.match.params.id);
  return (
    <>
      <Breadcrumb breadCrumbs={['Products']} endPage={'Product Build'} />
      <PageHeader pageName={'Product Build'} />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className='row lg'>
            <div className='col12 lg'>
              <div className='list-header'>
                <div>
                  Product build history for{' '}
                  {filteredProduct && filteredProduct[0].name}
                </div>
              </div>
              <div className='list-body'>
                {filteredBuilds.length > 0 ? (
                  filteredBuilds.map((build) => (
                    <ProductBuildItem key={build.id} build={build} />
                  ))
                ) : (
                  <div className='list-item list-item--message'>
                    No build history found...
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

ProductBuildList.propTypes = {
  build: PropTypes.object.isRequired,
  getBuilds: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  build: state.build,
  product: state.product.products,
  filteredBuilds: filter(state.build.builds, props.match.params.id),
  filteredProduct: state.product.products.filter(
    (product) => product.id.toString() === props.match.params.id
  ),
});
export default connect(mapStateToProps, { getBuilds })(ProductBuildList);
