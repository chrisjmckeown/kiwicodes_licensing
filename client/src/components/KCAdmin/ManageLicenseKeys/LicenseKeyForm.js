import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProducts } from '../../../actions/product';
import { getClients } from '../../../actions/client';
import Spinner from '../../Spinner';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import Moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

export const LicenseKeyForm = ({
  licenseKey,
  getProducts,
  getClients,
  onSubmit,
  product: { products, loading },
  client: { clients, loading: clientLoading },
}) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  useEffect(() => {
    getClients();
  }, [getClients]);

  const [licenseKeyDetails, setLicenseKeyDetails] = useState({
    calendarFocused: false,
    guid: uuidv4(),
    ...licenseKey,
  });
  const {
    id,
    guid,
    orderID,
    licenseCount,
    expiryDate,
    clientId,
    productId,
    calendarFocused,
  } = licenseKeyDetails;

  const handleChangeDetails = (e) => {
    setLicenseKeyDetails((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const updates = {
      guid,
      orderID,
      licenseCount,
      expiryDate: Moment(expiryDate).format('yyyy-MM-DDT00:00:00.000'),
      clientId,
      productId,
    };
    onSubmit(updates);
  };

  const onFocusChange = ({ focused }) => {
    setLicenseKeyDetails((state) => ({
      ...state,
      calendarFocused: focused,
    }));
  };
  const onDateChange = (expiryDate) => {
    if (expiryDate) {
      setLicenseKeyDetails((state) => ({
        ...state,
        expiryDate,
      }));
    }
  };
  return (
    <>
      {loading && clientLoading ? (
        <Spinner />
      ) : (
        <>
          <form className='std form' onSubmit={onSubmitForm}>
            <div className='form__marginLeft'>
              <h3>License Key {id}</h3>
              <ul className='form_ul'>
                <li className='form_li'>
                  <div className='form_left'>
                    <label>GUID</label>
                  </div>
                  <input
                    className='form_right'
                    name={'guid'}
                    value={licenseKeyDetails.guid || guid}
                    onChange={(e) => handleChangeDetails(e)}
                  ></input>
                </li>
                <li className='form_li'>
                  <div className='form_left'>
                    <label>Order Id</label>
                  </div>
                  <input
                    className='form_right'
                    name={'orderID'}
                    value={licenseKeyDetails.orderID || orderID}
                    onChange={(e) => handleChangeDetails(e)}
                  ></input>
                </li>
                <li className='form_li'>
                  <div className='form_left'>
                    <label>License Count</label>
                  </div>
                  <input
                    className='form_right'
                    name={'licenseCount'}
                    type='number'
                    value={licenseKeyDetails.licenseCount || licenseCount}
                    onChange={(e) => handleChangeDetails(e)}
                  ></input>
                </li>
                <li className='form_li'>
                  <div className='form_left'>
                    <label>Expiry Date</label>
                  </div>
                  <SingleDatePicker
                    date={Moment(expiryDate)}
                    onDateChange={onDateChange}
                    focused={calendarFocused}
                    onFocusChange={onFocusChange}
                    id={'expiryDate'}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                  />
                </li>
                <li className='form_li'>
                  <div className='form_left'>
                    <label>Client Id</label>
                  </div>
                  <select
                    className='form_right'
                    name='clientId'
                    value={clientId}
                    onChange={(e) => handleChangeDetails(e)}
                  >
                    <option key={0} value={0}>
                      {'Please select'}
                    </option>
                    {clients.length > 0 &&
                      clients.map((client) => (
                        <option key={client.id} value={client.id}>
                          {client.name}
                        </option>
                      ))}
                  </select>
                </li>
                <li className='form_li'>
                  <div className='form_left'>
                    <label>Product Id</label>
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

LicenseKeyForm.propTypes = {
  getProducts: PropTypes.func.isRequired,
  getClients: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  product: state.product,
  client: state.client,
});

export default connect(mapStateToProps, { getProducts, getClients })(
  LicenseKeyForm
);
