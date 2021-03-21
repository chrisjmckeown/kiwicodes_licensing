import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../../actions/alert';

export const ProductForm = ({ product, setAlert, onSubmit }) => {
  const [id] = useState(product ? product.id : '');
  const [name, setName] = useState(product ? product.name : '');
  const [description, setDescription] = useState(
    product ? product.description : ''
  );
  const [purchaseLink, setPurchaseLink] = useState(
    product ? product.purchaseLink : ''
  );
  const [helpLink, setHelpLink] = useState(product ? product.helpLink : '');
  const [imageLink, setImageLink] = useState(product ? product.imageLink : '');

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (!name || !description) {
      setAlert('Please enter name and description', 'danger');
    } else {
      onSubmit({
        name,
        description,
        purchaseLink,
        helpLink,
        imageLink,
      });
    }
  };

  return (
    <>
      <form className='std form' onSubmit={onSubmitForm}>
        <fieldset className='form__fieldset'>
          <div className='form__marginLeft'>
            <h3>Product {id}</h3>
            <>
              <label className='form__text form__label'>Name</label>
              <input
                className='form__input'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </>
            <>
              <label className='form__text form__label'>Description</label>
              <textarea
                className='form__textarea'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </>
            <>
              <label className='form__text form__label'>Purchase Link</label>
              <input
                className='form__input'
                value={purchaseLink}
                onChange={(e) => setPurchaseLink(e.target.value)}
              ></input>
            </>
            <>
              <label className='form__text form__label'>Help Link</label>
              <input
                className='form__input'
                value={helpLink}
                onChange={(e) => setHelpLink(e.target.value)}
              ></input>
            </>
            <>
              <label className='form__text form__label'>Image Link</label>
              <input
                className='form__input'
                value={imageLink}
                onChange={(e) => setImageLink(e.target.value)}
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

ProductForm.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(undefined, { setAlert })(ProductForm);
