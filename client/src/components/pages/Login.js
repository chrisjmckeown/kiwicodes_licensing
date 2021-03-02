import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [registerFormData, setRegisterFormData] = useState({
    registerEmail: '',
    registerPassword: '',
    registerPassword2: '',
  });
  const [loginFormData, setLoginFormData] = useState({
    loginEmail: '',
    loginPassword: '',
  });

  const {
    registerEmail,
    registerPassword,
    registerPassword2,
  } = registerFormData;
  const { loginEmail, loginPassword } = loginFormData;

  const onChangeRegister = (e) =>
    setRegisterFormData({
      ...registerFormData,
      [e.target.name]: e.target.value,
    });

  const onChangeLogin = (e) =>
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });

  const onSubmitRegister = async (e) => {
    e.preventDefault();
    if (registerPassword !== registerPassword2) {
      console.log('Passwords do not match');
    } else {
      const newMember = {
        email: registerEmail,
        password: registerPassword,
        clientId: 1,
      };
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const body = JSON.stringify(newMember);

        const res = await axios.post('/api/members', body, config);
        console.log(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    }
  };
  const onSubmitLogin = async (e) => {
    e.preventDefault();
    const member = {
      email: loginEmail,
      password: loginPassword,
    };
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify(member);
      console.log(body);

      const res = await axios.post('/api/auth', body, config);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };
  return (
    <main className='main'>
      <div className='main_content'>
        <div className='container'>
          <div className='row body_margin'>
            <div className='col'>
              <div className='container'>
                <div className='row'>
                  <div className='breadcrumb'>
                    <Link to='/' title='return to Home'>
                      Home
                    </Link>
                    <span className='navigation-pipe'>&gt;</span>
                    <span className='navigation_page'>Login</span>
                  </div>
                </div>
                <div className='row'>
                  <div className='products'>
                    <h1>Login</h1>
                  </div>
                </div>
                <div className='row'>
                  <div className='col6'>
                    <form
                      className='std create_account_form'
                      onSubmit={(e) => onSubmitRegister(e)}
                    >
                      <fieldset>
                        <h3>Create your account</h3>
                        <h4>Enter your e-mail address to create an account.</h4>
                        <p className='text'>
                          <label>E-mail address</label>
                          <span>
                            <input
                              type='text'
                              name='registerEmail'
                              value={registerEmail}
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
                              name='registerPassword'
                              value={registerPassword}
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
                              name='registerPassword2'
                              value={registerPassword2}
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
                            className='button_large'
                            value='Create your account'
                          ></input>
                        </p>
                      </fieldset>
                    </form>
                  </div>
                  <div className='col6'>
                    <form
                      className='std login_form'
                      onSubmit={(e) => onSubmitLogin(e)}
                    >
                      <fieldset>
                        <h3>Already registered ?</h3>
                        <p className='text'>
                          <label>E-mail address</label>
                          <span>
                            <input
                              type='text'
                              name='loginEmail'
                              value={loginEmail}
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
                              name='loginPassword'
                              value={loginPassword}
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
                          <a href='password-recovery.html'>
                            Forgot your password?
                          </a>
                        </p>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Login;
