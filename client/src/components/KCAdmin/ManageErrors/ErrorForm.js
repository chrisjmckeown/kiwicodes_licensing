import React, { useState } from 'react';

export const ErrorForm = ({ error, onSubmit }) => {
  const [errorDetails, setErrorDetails] = useState({ ...error });
  const {
    id,
    date,
    message,
    className,
    methodName,
    buildNumber,
    revitBuild,
  } = errorDetails;
  console.log(errorDetails);

  const handleChangeDetails = (e) => {
    setErrorDetails((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

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
          <ul className='form_ul'>
            <li className='form_li'>
              <div className='form_left'>
                <label>Date</label>
              </div>
              <input
                className='form_right'
                name={date}
                value={date}
                onChange={(e) => handleChangeDetails(e)}
              ></input>
            </li>
            <li className='form_li'>
              <div className='form_left'>
                <label>Message</label>
              </div>
              <input
                className='form_right'
                name={message}
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
                name={className}
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
                name={methodName}
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
                name={buildNumber}
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
                name={revitBuild}
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
