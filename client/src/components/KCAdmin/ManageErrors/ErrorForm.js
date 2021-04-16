import React, { useState } from 'react';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import Moment from 'moment';

export const ErrorForm = ({ error, onSubmit }) => {
  const [errorDetails, setErrorDetails] = useState({
    calendarFocused: false,
    ...error,
  });
  const {
    id,
    date,
    message,
    className,
    methodName,
    buildNumber,
    revitBuild,
    calendarFocused,
  } = errorDetails;

  const handleChangeDetails = (e) => {
    setErrorDetails((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const updates = {
      date: Moment(date).format('yyyy-MM-DDT00:00:00.000'),
      message,
      className,
      methodName,
      buildNumber,
      revitBuild,
    };
    onSubmit(updates);
  };

  const onFocusChange = ({ focused }) => {
    setErrorDetails((state) => ({
      ...state,
      calendarFocused: focused,
    }));
  };
  const onDateChange = (date) => {
    if (date) {
      setErrorDetails((state) => ({
        ...state,
        date,
      }));
    }
  };

  return (
    <>
      <form className='std form' onSubmit={onSubmitForm}>
        <div className='form__marginLeft'>
          <h3>Error {id}</h3>
          <ul className='form_ul'>
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
                <label>Message</label>
              </div>
              <input
                className='form_right'
                name={'message'}
                value={message}
                onChange={(e) => handleChangeDetails(e)}
              ></input>
            </li>
            <li className='form_li'>
              <div className='form_left'>
                <label>Class Name</label>
              </div>
              <input
                className='form_right'
                name={'className'}
                value={className}
                onChange={(e) => handleChangeDetails(e)}
              ></input>
            </li>
            <li className='form_li'>
              <div className='form_left'>
                <label>Method Name</label>
              </div>
              <input
                className='form_right'
                name={'methodName'}
                value={methodName}
                onChange={(e) => handleChangeDetails(e)}
              ></input>
            </li>
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
                <label>Revit Build</label>
              </div>
              <input
                className='form_right'
                name={'revitBuild'}
                value={revitBuild}
                onChange={(e) => handleChangeDetails(e)}
              ></input>
            </li>
          </ul>
          <p className='form__submit form__marginTop'>
            <input type='submit' className='button__large'></input>
          </p>
        </div>
      </form>
    </>
  );
};

export default ErrorForm;
