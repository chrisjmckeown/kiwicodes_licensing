import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../../actions/alert';

export const AppForm = ({ app, setAlert, onSubmit }) => {
  const [id] = useState(app ? app.id : '');
  const [name, setName] = useState(app ? app.name : '');
  const [number, setNumber] = useState(app ? app.number : '');
  const [description, setDescription] = useState(app ? app.description : '');
  const [helpLink, setHelpLink] = useState(app ? app.helpLink : '');

  const onSubmitForm = async (e) => {
    e.preventDefault();

    onSubmit({
      name,
      number,
      description,
      helpLink,
    });
  };

  return (
    <>
      <form className='std form' onSubmit={onSubmitForm}>
        <fieldset className='form__fieldset'>
          <div className='form__marginLeft'>
            <h3>App {id}</h3>
            <>
              <label className='form__text form__label'>Name</label>
              <input
                className='form__input'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </>
            <>
              <label className='form__text form__label'>Number</label>
              <input
                className='form__input'
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              ></input>
            </>
            <>
              <label className='form__text form__label'>description</label>
              <textarea
                className='form__textarea'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </>
            <>
              <label className='form__text form__label'>Help Link</label>
              <input
                className='form__input'
                value={helpLink}
                onChange={(e) => setHelpLink(e.target.value)}
              ></input>
            </>
            <p className='form__submit form__marginTop'>
              <input type='submit' className='button__large'></input>
            </p>
          </div>
        </fieldset>
      </form>
    </>
  );
};

AppForm.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(undefined, { setAlert })(AppForm);
