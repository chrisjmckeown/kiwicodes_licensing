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
        <div className='form__marginLeft'>
          <h3>Client {id}</h3>
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
                <label>Phone</label>
              </div>
              <input
                className='form_right'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></input>
            </li>
            <li className='form_li'>
              <div className='form_left'>
                <label>Address</label>
              </div>
              <input
                className='form_right'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></input>
            </li>
            <li className='form_li'>
              <div className='form_left'>
                <label>Primary Email</label>
              </div>
              <input
                className='form_right'
                value={primaryEmail}
                onChange={(e) => setPrimaryEmail(e.target.value)}
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

ClientForm.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(undefined, { setAlert })(ClientForm);
