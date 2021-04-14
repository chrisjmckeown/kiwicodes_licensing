import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Alert from '../../components/Alert';
import Breadcrumb from '../../components/Breadcrumb';
import PageHeader from '../../components/PageHeader';
import Spinner from '../../components/Spinner';

import { getProductActivations } from '../../actions/productActivationActions';
import ViewProductUsage from '../../components/Reports/View_product_usage';

const View_product_usage = ({
  getProductActivations,
  productActivation: { productActivations, loading },
}) => {
  useEffect(() => {
    getProductActivations('admin');
  }, [getProductActivations]);
  return (
    <>
      <Breadcrumb breadCrumbs={['Admin']} endPage={'View Product Usage'} />
      <PageHeader pageName={'View Product Usage'} />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <ViewProductUsage productActivations={productActivations} />
        </>
      )}
      <Alert />
    </>
  );
};

View_product_usage.propTypes = {
  getProductActivations: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  productActivation: state.productActivation,
});
export default connect(mapStateToProps, { getProductActivations })(
  View_product_usage
);
