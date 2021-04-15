import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../../actions/alertActions';

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

    onSubmit({
      name,
      description,
      purchaseLink,
      helpLink,
      imageLink,
    });
  };

  return (
    <>
      <form className='std form' onSubmit={onSubmitForm}>
        <div className='form__marginLeft'>
          <h3>Product {id}</h3>
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
                <label>Purchase Link</label>
              </div>
              <input
                className='form_right'
                value={purchaseLink}
                onChange={(e) => setPurchaseLink(e.target.value)}
              ></input>
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
            <li className='form_li'>
              <div className='form_left'>
                <label>Image Link</label>
              </div>
              <input
                className='form_right'
                value={imageLink}
                onChange={(e) => setImageLink(e.target.value)}
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

ProductForm.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(undefined, { setAlert })(ProductForm);
