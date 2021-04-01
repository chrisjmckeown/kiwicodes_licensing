import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updatePassword } from '../../../actions/auth';
import { resetPassword } from '../../../actions/member';
import { setAlert } from '../../../actions/alert';

export const PasswordForm = ({
  member,
  setAlert,
  resetPassword,
  updatePassword,
}) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      const updates = {
        id: member.id,
        password,
        currentPassword,
      };
      updatePassword(updates);
    }
  };

  const onClickLostPassword = async (e) => {
    e.preventDefault();
    if (!member.email) {
      setAlert('Invalid email', 'danger');
    } else {
      const results = await resetPassword(member.email);
      if (results) {
        setAlert('Password reset, instructions sent', 'success');
      }
    }
  };
  return (
    <>
      <form className='std form' onSubmit={onSubmitForm}>
        <div className='form__marginLeft'>
          <h3>Password</h3>
          <ul className='form_ul'>
            <li className='form_li'>
              <h4>Your passord requires 6 or more characters</h4>
            </li>
            <li className='form_li'>
              <div className='form_left'>
                <label>Current Password</label>
              </div>
              <input
                type='password'
                name='currentPassword'
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className='form_right'
              ></input>
            </li>
            <li className='form_li'>
              <div className='form_left'> </div>
              <p className='form_right lost_password'>
                <a href='#!' onClick={(e) => onClickLostPassword(e)}>
                  Forgot your password?
                </a>
              </p>
            </li>
            <li className='form_li'>
              <div className='form_left'>
                <label>Password</label>
              </div>
              <input
                type='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='form_right'
              ></input>
            </li>
            <li className='form_li'>
              <div className='form_left'>
                <label>Confirm password</label>
              </div>
              <input
                type='password'
                name='password2'
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                className='form_right'
              ></input>
            </li>
            <li className='form_li'>
              <h4>
                Updating your password will log you out on all other devices.
              </h4>
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

PasswordForm.propTypes = {
  setAlert: PropTypes.func.isRequired,
  resetPassword: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  member: state.auth.member,
});

export default connect(mapStateToProps, {
  setAlert,
  resetPassword,
  updatePassword,
})(PasswordForm);
