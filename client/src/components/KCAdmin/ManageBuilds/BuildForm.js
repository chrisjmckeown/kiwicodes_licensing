import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import PropTypes from 'prop-types';
import { getProducts } from '../../../actions/productActions';
import Moment from 'moment';
import Spinner from '../../Spinner';

export const BuildForm = ({
  build,
  onSubmit,
  getProducts,
  product: { products, loading },
}) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  const [buildDetails, setBuildDetails] = useState({
    calendarFocused: false,
    ...build,
  });
  const {
    id,
    buildNumber,
    comments,
    date,
    updates,
    productId,
    calendarFocused,
  } = buildDetails;

  const handleChangeDetails = (e) => {
    setBuildDetails((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const buildUpdates = {
      buildNumber,
      comments,
      date: Moment(date).format('yyyy-MM-DDT00:00:00.000'),
      updates,
      productId,
    };
    onSubmit(buildUpdates);
  };

  const onFocusChange = ({ focused }) => {
    setBuildDetails((state) => ({
      ...state,
      calendarFocused: focused,
    }));
  };
  const onDateChange = (date) => {
    if (date) {
      setBuildDetails((state) => ({
        ...state,
        date,
      }));
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <form className='std form' onSubmit={onSubmitForm}>
            <div className='form__marginLeft'>
              <h3>Build {id}</h3>
              <ul className='form_ul'>
                <li className='form_li'>
                  <div className='form_left'>
                    <label>Build Number</label>
                  </div>
                  <input
                    className='form_right'
                    name={'buildNumber'}
                    value={buildNumber}
                    onChange={(e) => handleChangeDetails(e)}
                  ></input>
                </li>
                <li className='form_li'>
                  <div className='form_left'>
                    <label>Comments</label>
                  </div>
                  <input
                    className='form_right'
                    name={'comments'}
                    value={comments}
                    onChange={(e) => handleChangeDetails(e)}
                  ></input>
                </li>
                <li className='form_li'>
                  <div className='form_left'>
                    <label>Date</label>
                  </div>

                  <SingleDatePicker
                    date={Moment(date)}
                    onDateChange={onDateChange}
                    focused={calendarFocused}
                    onFocusChange={onFocusChange}
                    id={'date'}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                  />
                </li>
                <li className='form_li'>
                  <div className='form_left'>
                    <label>Updates</label>
                  </div>
                  <input
                    className='form_right'
                    name={'updates'}
                    value={updates}
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

BuildForm.propTypes = {
  getProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  product: state.product,
});

export default connect(mapStateToProps, { getProducts })(BuildForm);
