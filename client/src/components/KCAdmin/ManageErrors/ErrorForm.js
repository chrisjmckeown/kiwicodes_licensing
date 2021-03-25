import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../../actions/alert';

export const ErrorForm = ({ error, setAlert, onSubmit }) => {
  const [id] = useState(error ? error.id : '');
  const [date, setDate] = useState(error ? error.date : '');
  const [message, setMessage] = useState(error ? error.message : '');
  const [className, setClassName] = useState(error ? error.className : '');
  const [methodName, setMethodName] = useState(error ? error.methodName : '');
  const [buildNumber, setBuildNumber] = useState(
    error ? error.buildNumber : ''
  );
  const [revitBuild, setRevitBuild] = useState(error ? error.revitBuild : '');

  const onSubmitForm = async (e) => {
    e.preventDefault();

    onSubmit({
      date,
      message,
      className,
      methodName,
      buildNumber,
      revitBuild,
    });
  };

  return (
    <>
      <form className='std form' onSubmit={onSubmitForm}>
        <div className='form__marginLeft'>
          <h3>Error {id}</h3>
          <>
            <label className='form__text form__label'>Date</label>
            <input
              className='form__input'
              value={date}
              onChange={(e) => setDate(e.target.value)}
            ></input>
          </>
          <>
            <label className='form__text form__label'>Message</label>
            <input
              className='form__input'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></input>
          </>
          <>
            <label className='form__text form__label'>Class Name</label>
            <input
              className='form__input'
              value={className}
              onChange={(e) => setClassName(e.target.value)}
            ></input>
          </>
          <>
            <label className='form__text form__label'>Method Name</label>
            <input
              className='form__input'
              value={methodName}
              onChange={(e) => setMethodName(e.target.value)}
            ></input>
          </>
          <>
            <label className='form__text form__label'>Build Number</label>
            <input
              className='form__input'
              value={buildNumber}
              onChange={(e) => setBuildNumber(e.target.value)}
            ></input>
          </>
          <>
            <label className='form__text form__label'>Revit Build</label>
            <input
              className='form__input'
              value={revitBuild}
              onChange={(e) => setRevitBuild(e.target.value)}
            ></input>
          </>
          <p className='form__submit form__marginTop'>
            <input type='submit' className='button__large'></input>
          </p>
        </div>
      </form>
    </>
  );
};

ErrorForm.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(undefined, { setAlert })(ErrorForm);
