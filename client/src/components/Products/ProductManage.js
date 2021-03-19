import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const ProductManage = ({
  auth: { loading, isAuthenticated, permissionLevel },
}) => {
  return (
    <>
      {isAuthenticated && !loading && permissionLevel === 'kiwicodes' ? (
        <>
          <Link className='button__std' to={'/product_create/'}>
            Create Product
          </Link>
        </>
      ) : undefined}
    </>
  );
};

ProductManage.propTypes = {
  auth: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(ProductManage);
