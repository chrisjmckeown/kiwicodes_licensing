import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = loginFormData;

  const onChangeLogin = (e) =>
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='' />;
  }

  return (
    <form className='std login_form' onSubmit={(e) => onSubmitLogin(e)}>
      <fieldset>
        <h3>Already registered ?</h3>
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
            className='button_large'
            value='Log in'
          ></input>
        </p>
        <p className='lost_password'>
          <a href='password-recovery.html'>Forgot your password?</a>
        </p>
      </fieldset>
    </form>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
