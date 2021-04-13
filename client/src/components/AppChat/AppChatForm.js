import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addAppChat } from '../../actions/appChatActions';

const AppChatForm = ({ app, addAppChat }) => {
  const [comment, setComment] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      comment,
      like: true,
      appId: app.id,
      appChatId: null,
    };
    addAppChat(data);
    setComment('');
  };

  return (
    <>
      <form className='std form' onSubmit={onSubmit}>
        <div className='form__marginLeft'>
          <h3>Leave a comment...</h3>
          <ul className='form_ul'>
            <li className='form_li'>
              <div className='form_left'>
                <label>Comment</label>
              </div>
              <textarea
                className='form__textarea'
                placeholder='Create a comment'
                name={'comment'}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
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

AppChatForm.propTypes = {
  addAppChat: PropTypes.func.isRequired,
};

export default connect(null, { addAppChat })(AppChatForm);
