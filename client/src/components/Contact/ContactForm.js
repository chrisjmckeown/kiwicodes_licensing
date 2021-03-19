import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setAlert } from '../../actions/alert';
import history from '../../routes/history';
import OptionModal from '../../components/Modal/OptionModal';

import emailjs, { init } from 'emailjs-com';
init('user_pPZYiIxmJbGak7eINJthO');

export const ContactForm = ({ setAlert }) => {
  const [subjectHeading, setSubjectHeading] = useState('Customer Support');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [selectedOption, setselectedOption] = useState('');

  const handleClearSelectedOption = () => setselectedOption(undefined);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!email || !name || !message) {
      setAlert('Please enter all details', 'danger');
    } else {
      const variables = {
        message: message,
        from_name: name,
        reply_to: email,
        subject: subjectHeading,
      };
      const serviceID = 'service_vlc140u';
      const templateID = 'template_2b53yrv';
      const result = await emailjs.send(serviceID, templateID, variables);
      if (result.status === 200) {
        history.push('/');
      } else {
        setselectedOption(true);
        setAlert('Failed to send message, please try again.', 'danger');
      }
    }
  };

  return (
    <>
      <form className='std form' onSubmit={onSubmit}>
        <fieldset className='form__fieldset'>
          <div className='form__marginLeft'>
            <h3>Send a message</h3>
            <p className='select'>
              <label className='form__text form__label'>Subject Heading</label>
              <select
                className='form__input'
                value={subjectHeading}
                onChange={(e) => setSubjectHeading(e.target.value)}
              >
                <option value='Customer Support'>Customer Support</option>
                <option value='Extend Trial'>Extend Trial</option>
                <option value='Sales Support'>Sales Support</option>
              </select>
            </p>
            <p className='form__text'>For all Sales and quotes support</p>
            <>
              <label className='form__text form__label'>Name</label>
              <input
                className='form__input'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </>
            <>
              <label className='form__text form__label'>E-mail address</label>
              <input
                className='form__input'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </>
            <>
              <label className='form__text form__label'>Message</label>
              <textarea
                className='form__textarea'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </>
            <p className='form__submit'>
              <input type='submit' className='button__large'></input>
            </p>
          </div>
        </fieldset>
      </form>
      <OptionModal
        selectedOption={selectedOption}
        handleClearSelectedOption={handleClearSelectedOption}
        title={'Error'}
        message={'Failed to send message, please try again.'}
      />
    </>
  );
};
ContactForm.propTypes = {
  setAlert: PropTypes.func.isRequired,
};
export default connect(null, { setAlert })(ContactForm);
