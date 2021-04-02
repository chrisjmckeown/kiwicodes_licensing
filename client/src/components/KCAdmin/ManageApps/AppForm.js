import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../../actions/alert';
import { getProducts } from '../../../actions/product';
import Spinner from '../../Spinner';

export const AppForm = ({
  app,
  setAlert,
  onSubmit,
  getProducts,
  product: { products, loading },
}) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const [appDetails, setAppDetails] = useState({ ...app });
  const { id, name, number, description, helpLink, productId } = appDetails;

  const handleChangeDetails = (e) => {
    setAppDetails((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const updates = {
      name,
      number,
      description,
      helpLink,
      productId,
    };
    onSubmit(updates);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <form className='std form' onSubmit={onSubmitForm}>
            <div className='form__marginLeft'>
              <h3>App {id}</h3>
              <ul className='form_ul'>
                <li className='form_li'>
                  <div className='form_left'>
                    <label>Name</label>
                  </div>
                  <input
                    className='form_right'
                    name='name'
                    value={name}
                    onChange={(e) => handleChangeDetails(e)}
                  ></input>
                </li>
                <li className='form_li'>
                  <div className='form_left'>
                    <label>Number</label>
                  </div>
                  <input
                    className='form_right'
                    name='number'
                    value={number}
                    onChange={(e) => handleChangeDetails(e)}
                  ></input>
                </li>
                <li className='form_li'>
                  <div className='form_left'>
                    <label>Description</label>
                  </div>
                  <textarea
                    className='form__textarea'
                    name='description'
                    value={description}
                    onChange={(e) => handleChangeDetails(e)}
                  ></textarea>
                </li>
                <li className='form_li'>
                  <div className='form_left'>
                    <label>Help Link</label>
                  </div>
                  <input
                    className='form_right'
                    name='helpLink'
                    value={helpLink}
                    onChange={(e) => handleChangeDetails(e)}
                  ></input>
                </li>
                <li className='form_li'>
                  <div className='form_left'>
                    <label>Associated Product</label>
                  </div>
                  <select
                    className='form_right'
                    name='productId'
                    value={productId}
                    onChange={(e) => handleChangeDetails(e)}
                  >
                    <option key={0} value={0}>
                      {'Please select'}
                    </option>
                    {products.length > 0 &&
                      products.map((product) => (
                        <option key={product.id} value={product.id}>
                          {product.name}
                        </option>
                      ))}
                  </select>
                </li>
              </ul>
              <p className='form__submit form__marginTop'>
                <input type='submit' className='button__large'></input>
              </p>
            </div>
          </form>
        </>
      )}
    </>
  );
};

AppForm.propTypes = {
  setAlert: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  product: state.product,
});

export default connect(mapStateToProps, { setAlert, getProducts })(AppForm);
