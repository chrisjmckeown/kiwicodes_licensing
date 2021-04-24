import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../../actions/alertActions';
import { Label, Input } from '../../Form/formControls';

export const ClientForm = ({ client, setAlert, onSubmit }) => {
  const [clientDetails, setClientDetails] = useState({
    ...client,
  });
  const {
    id,
    name,
    phone,
    address1,
    address2,
    city,
    country,
    region,
    postal,
    primaryEmail,
  } = clientDetails;

  const handleChangeDetails = (e) => {
    setClientDetails((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    onSubmit({
      name,
      phone,
      address1,
      address2,
      city,
      region,
      postal,
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
              <Label text={'Name'} />
              <Input
                name='name'
                value={name || ''}
                onChange={(e) => handleChangeDetails(e)}
              />
            </li>
            <li className='form_li'>
              <Label text={'Phone'} />
              <Input
                name='phone'
                value={phone || ''}
                onChange={(e) => handleChangeDetails(e)}
              />
            </li>
            <li className='form_li'>
              <Label text={'Address 1'} />
              <Input
                name='address1'
                value={address1 || ''}
                onChange={(e) => handleChangeDetails(e)}
              />
            </li>
            <li className='form_li'>
              <Label text={'Address 2'} />
              <Input
                name='address2'
                value={address2 || ''}
                onChange={(e) => handleChangeDetails(e)}
              />
            </li>
            <li className='form_li'>
              <Label text={'City'} />
              <Input
                name='city'
                value={city || ''}
                onChange={(e) => handleChangeDetails(e)}
              />
            </li>
            <li className='form_li'>
              <Label text={'Country'} />
              <Input
                name='country'
                value={country || ''}
                onChange={(e) => handleChangeDetails(e)}
              />
            </li>
            <li className='form_li'>
              <Label text={'Region'} />
              <Input
                name='region'
                value={region || ''}
                onChange={(e) => handleChangeDetails(e)}
              />
            </li>
            <li className='form_li'>
              <Label text={'Postal'} />
              <Input
                name='postal'
                value={postal || ''}
                onChange={(e) => handleChangeDetails(e)}
              />
            </li>
            <li className='form_li'>
              <Label text={'Primary Email'} />
              <Input
                name='primaryEmail'
                value={primaryEmail || ''}
                onChange={(e) => handleChangeDetails(e)}
              />
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
