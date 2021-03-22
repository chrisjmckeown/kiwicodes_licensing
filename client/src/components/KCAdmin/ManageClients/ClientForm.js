import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../../actions/alert';

export const ClientForm = ({ client, setAlert, onSubmit }) => {
  const [id] = useState(client ? client.id : '');
  const [name, setName] = useState(client ? client.name : '');
  const [phone, setPhone] = useState(client ? client.phone : '');
  const [address, setAddress] = useState(client ? client.address : '');
  const [primaryEmail, setPrimaryEmail] = useState(
    client ? client.primaryEmail : ''
  );

  const onSubmitForm = async (e) => {
    e.preventDefault();
    onSubmit({
      name,
      phone,
      address,
      primaryEmail,
    });
  };

  return (
    <>
      <form className='std form' onSubmit={onSubmitForm}>
        <fieldset className='form__fieldset'>
          <div className='form__marginLeft'>
            <h3>Client {id}</h3>
            <>
              <label className='form__text form__label'>Name</label>
              <input
                className='form__input'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </>
            <>
              <label className='form__text form__label'>Phone</label>
              <input
                className='form__input'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></input>
            </>
            <>
              <label className='form__text form__label'>Address</label>
              <input
                className='form__input'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></input>
            </>
            <>
              <label className='form__text form__label'>Primary Email</label>
              <input
                className='form__input'
                value={primaryEmail}
                onChange={(e) => setPrimaryEmail(e.target.value)}
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

ClientForm.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(undefined, { setAlert })(ClientForm);
