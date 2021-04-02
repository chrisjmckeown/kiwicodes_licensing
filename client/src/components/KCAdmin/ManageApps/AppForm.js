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
        <div className='form__marginLeft'>
          <h3>App {id}</h3>
          <ul className='form_ul'>
            <li className='form_li'>
              <div className='form_left'>
                <label>Name</label>
              </div>
              <input
                className='form_right'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </li>
            <li className='form_li'>
              <div className='form_left'>
                <label>Number</label>
              </div>
              <input
                className='form_right'
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              ></input>
            </li>
            <li className='form_li'>
              <div className='form_left'>
                <label>Description</label>
              </div>
              <textarea
                className='form__textarea'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </li>
            <li className='form_li'>
              <div className='form_left'>
                <label>Help Link</label>
              </div>
              <input
                className='form_right'
                value={helpLink}
                onChange={(e) => setHelpLink(e.target.value)}
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

AppForm.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(undefined, { setAlert })(AppForm);
