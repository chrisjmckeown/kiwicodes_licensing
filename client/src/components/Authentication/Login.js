import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { resetPassword } from '../../actions/memberActions';
import { setAlert } from '../../actions/alert';

const Login = ({ setAlert, login, isAuthenticated, resetPassword }) => {
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = loginFormData;

  const onChangeLogin = (e) =>
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });

  const onClickLostPassword = async (e) => {
    e.preventDefault();
    if (!email) {
      setAlert('Invalid email', 'danger');
    } else {
      const results = await resetPassword(email);
      if (results) {
        setAlert('Password reset, instructions sent', 'success');
      }
    }
  };

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='' />;
  }

  return (
    <form className='std login_form' onSubmit={(e) => onSubmitLogin(e)}>
      <h3>Login Details</h3>
      <p className='text'>
        <label>E-mail address</label>
        <span>
          <input
            type='text'
            name='email'
            value={email}
            onChange={(e) => onChangeLogin(e)}
            className='account_input'
          ></input>
        </span>
      </p>
      <p className='text'>
        <label>Password</label>
        <span>
          <input
            type='password'
            name='password'
            value={password}
            onChange={(e) => onChangeLogin(e)}
            className='account_input'
          ></input>
        </span>
      </p>
      <p className='submit'>
        <input
          type='submit'
          id='SubmitLogin'
          name='SubmitLogin'
          className='button__large'
          value='Log in'
        ></input>
      </p>
      <p className='lost_password'>
        <a href='#!' onClick={(e) => onClickLostPassword(e)}>
          Forgot your password?
        </a>
      </p>
    </form>
  );
};

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  resetPassword: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  setAlert,
  login,
  resetPassword,
})(Login);
