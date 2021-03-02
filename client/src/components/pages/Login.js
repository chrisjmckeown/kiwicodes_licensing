import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
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
                      action='authentication'
                      method='post'
                      className='std create_account_form'
                    >
                      <fieldset>
                        <h3>Create your account</h3>
                        <h4>Enter your e-mail address to create an account.</h4>
                        <p className='text'>
                          <label for='email_create'>E-mail address</label>
                          <span>
                            <input
                              type='text'
                              id='email_create'
                              name='email_create'
                              value=''
                              className='account_input'
                            ></input>
                          </span>
                        </p>
                        <p className='submit'>
                          <input
                            type='hidden'
                            className='hidden'
                            name='back'
                            value='my-account'
                          ></input>
                          <input
                            type='submit'
                            id='SubmitCreate'
                            name='SubmitCreate'
                            className='button_large'
                            value='Create your account'
                          ></input>
                          <input
                            type='hidden'
                            className='hidden'
                            name='SubmitCreate'
                            value='Create your account'
                          ></input>
                        </p>
                      </fieldset>
                    </form>
                  </div>
                  <div className='col6'>
                    <form
                      action='authentication'
                      method='post'
                      className='std login_form'
                    >
                      <fieldset>
                        <h3>Already registered ?</h3>
                        <p className='text'>
                          <label for='email'>E-mail address</label>
                          <span>
                            <input
                              type='text'
                              id='email'
                              name='email'
                              value=''
                              className='account_input'
                            ></input>
                          </span>
                        </p>
                        <p className='text'>
                          <label for='passwd'>Password</label>
                          <span>
                            <input
                              type='password'
                              id='passwd'
                              name='passwd'
                              value=''
                              className='account_input'
                            ></input>
                          </span>
                        </p>
                        <p className='submit'>
                          <input
                            type='hidden'
                            className='hidden'
                            name='back'
                            value='my-account'
                          ></input>
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
