import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alertActions';
import { register } from '../../actions/authActions';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [registerFormData, setRegisterFormData] = useState({
    email: '',
    password: '',
    password2: '',
  });
  const { email, password, password2 } = registerFormData;

  const onChangeRegister = (e) =>
    setRegisterFormData({
      ...registerFormData,
      [e.target.name]: e.target.value,
    });

  const onSubmitRegister = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      const newMember = {
        email,
        password,
        clientId: 1,
      };
      register(newMember);
    }
  };

  if (isAuthenticated) {
    return <Redirect to='' />;
  }

  return (
    <form
      className='std create_account_form'
      onSubmit={(e) => onSubmitRegister(e)}
    >
      <h3>Create your account</h3>
      <h4>Enter your e-mail address to create an account.</h4>
      <p className='text'>
        <label>E-mail address</label>
        <span>
          <input
            type='text'
            name='email'
            value={email}
            onChange={(e) => onChangeRegister(e)}
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
            onChange={(e) => onChangeRegister(e)}
            className='account_input'
          ></input>
        </span>
      </p>
      <p className='text'>
        <label>Confirm password</label>
        <span>
          <input
            type='password'
            name='password2'
            value={password2}
            onChange={(e) => onChangeRegister(e)}
            className='account_input'
          ></input>
        </span>
      </p>
      <p className='submit'>
        <input
          type='submit'
          id='SubmitCreate'
          name='SubmitCreate'
          className='button__large'
          value='Create your account'
        ></input>
      </p>
    </form>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
