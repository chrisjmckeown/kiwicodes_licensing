import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../../actions/alert';
import { getClients } from '../../../actions/client';
import Spinner from '../../Spinner';

export const MemberForm = ({
  member,
  onSubmit,
  setAlert,
  createMember,
  getClients,
  client: { clients, loading },
}) => {
  useEffect(() => {
    getClients();
  }, [getClients]);

  const [memberDetails, setMemberDetails] = useState({
    clientId: 0,
    role: 'user',
    password: '',
    password2: '',
    ...member,
  });
  const {
    id,
    firstName,
    lastName,
    email,
    role,
    avatar,
    active,
    password,
    password2,
    clientId,
  } = memberDetails;

  const handleChangeDetails = (e) => {
    setMemberDetails((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    let updates = { firstName, lastName, role, active, email, clientId };
    if (createMember || (password && password2)) {
      if (password !== password2) {
        setAlert('Passwords do not match', 'danger');
        return;
      } else {
        updates.password = password;
      }
    }
    onSubmit(updates);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <form className='std form' onSubmit={onSubmitForm}>
            <div className='form__marginLeft'>
              <h3>Member {id}</h3>
              <ul className='form_ul'>
                <li className='form_li'>
                  <div className='form_left'>
                    <label>First Name</label>
                  </div>
                  <input
                    className='form_right'
                    name='firstName'
                    value={firstName || ''}
                    onChange={(e) => handleChangeDetails(e)}
                  ></input>
                </li>
                <li className='form_li'>
                  <div className='form_left'>
                    <label>Last Name</label>
                  </div>
                  <input
                    className='form_right'
                    name='lastName'
                    value={lastName || ''}
                    onChange={(e) => handleChangeDetails(e)}
                  ></input>
                </li>
                <li className='form_li'>
                  <div className='form_left'>
                    <label>Email</label>
                  </div>

                  {!createMember ? (
                    <p className='form_right'>{email}</p>
                  ) : (
                    <input
                      className='form_right'
                      name='email'
                      value={email || ''}
                      onChange={(e) => handleChangeDetails(e)}
                    ></input>
                  )}
                </li>
                <li className='form_li'>
                  <div className='form_left'>
                    <label>Role</label>
                  </div>
                  <select
                    className='form_right'
                    name='role'
                    value={role || ''}
                    onChange={(e) => handleChangeDetails(e)}
                  >
                    <option value='kiwicodes'>Kiwicodes</option>
                    <option value='admin'>Admin</option>
                    <option value='user'>User</option>
                  </select>
                </li>
                {!createMember && (
                  <>
                    <li className='form_li'>
                      <div className='form_left'>
                        <label>Avatar</label>
                      </div>
                      <div className='form_right'>
                        <img src={avatar} alt='Avatar' />
                        <p className='form__p'>{avatar}</p>
                      </div>
                    </li>
                    <li className='form_li'>
                      <div className='form_left'>
                        <label>Active</label>
                      </div>
                      <input
                        name='active'
                        type='checkbox'
                        defaultChecked={active}
                        onChange={(e) => handleChangeDetails(e)}
                      ></input>
                    </li>
                  </>
                )}
                <li className='form_li'>
                  <div className='form_left'>
                    <label>Company assigned to</label>
                  </div>
                  <select
                    className='form_right'
                    name='clientId'
                    value={clientId}
                    onChange={(e) => handleChangeDetails(e)}
                  >
                    <option key={0} value={0}>
                      {'Please select'}
                    </option>
                    {clients.length > 0 &&
                      clients.map((client) => (
                        <option key={client.id} value={client.id}>
                          {client.name}
                        </option>
                      ))}
                  </select>
                </li>
                <li className='form_li'>
                  <div className='form_left'>
                    <label>Password</label>
                  </div>
                  <input
                    type='password'
                    name='password'
                    value={password || ''}
                    onChange={(e) => handleChangeDetails(e)}
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
                    value={password2 || ''}
                    onChange={(e) => handleChangeDetails(e)}
                    className='form_right'
                  ></input>
                </li>
              </ul>
              <p className='form__submit form__marginTop'>
                <input type='submit' className='button__large'></input>
              </p>
            </div>
          </form>
        </>
      )}
    </>
  );
};

MemberForm.propTypes = {
  setAlert: PropTypes.func.isRequired,
  getClients: PropTypes.func.isRequired,
  client: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  client: state.client,
});

export default connect(mapStateToProps, { setAlert, getClients })(MemberForm);
