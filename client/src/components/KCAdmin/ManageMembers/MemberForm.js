import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../../actions/alert';
import { getClients } from '../../../actions/client';
import Spinner from '../../Spinner';
import { Label, Input, P, Select } from '../../Form/formControls';

export const MemberForm = ({
  member,
  onSubmit,
  setAlert,
  createMember,
  getClients,
  client: { clients, loading },
  auth: { member: admin },
}) => {
  useEffect(() => {
    admin.role === 'kiwicodes' && getClients();
  }, [getClients, admin]);

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
    let updates = {
      firstName,
      lastName,
      role,
      active,
      email,
      clientId,
      fromEmail: admin.email,
      fromCompany: admin.client.name,
      fromName: admin.firstName + ' ' + admin.lastName,
    };
    admin.role === 'admin' && (updates.clientId = admin.clientId);
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
      {loading & (admin.role === 'kiwicodes') ? (
        <Spinner />
      ) : (
        <>
          <form className='std form' onSubmit={onSubmitForm}>
            <div className='form__marginLeft'>
              <h3>Member {id}</h3>
              <ul className='form_ul'>
                <li className='form_li'>
                  <Label text={'First Name'} />
                  <Input
                    name='firstName'
                    value={firstName || ''}
                    onChange={(e) => handleChangeDetails(e)}
                  />
                </li>
                <li className='form_li'>
                  <Label text={'Last Name'} />
                  <Input
                    name='lastName'
                    value={lastName || ''}
                    onChange={(e) => handleChangeDetails(e)}
                  ></Input>
                </li>
                <li className='form_li'>
                  <Label text={'Email'} />
                  {!createMember ? (
                    <P text={email} />
                  ) : (
                    <Input
                      name='email'
                      value={email || ''}
                      onChange={(e) => handleChangeDetails(e)}
                    ></Input>
                  )}
                </li>
                <li className='form_li'>
                  <Label text={'Role'} />
                  <Select
                    name='role'
                    value={role || ''}
                    onChange={(e) => handleChangeDetails(e)}
                  >
                    {admin.role === 'kiwicodes' && (
                      <option value='kiwicodes'>Kiwicodes</option>
                    )}
                    <option value='admin'>Admin</option>
                    <option value='user'>User</option>
                  </Select>
                </li>
                {!createMember && (
                  <>
                    <li className='form_li'>
                      <Label text={'Avatar'} />
                      <div className='form_right'>
                        <img src={avatar} alt='Avatar' />
                        <P text={avatar} />
                      </div>
                    </li>
                    <li className='form_li'>
                      <Label text={'Active'} />
                      <input
                        name='active'
                        type='checkbox'
                        defaultChecked={active}
                        onChange={(e) => handleChangeDetails(e)}
                      ></input>
                    </li>
                  </>
                )}
                {admin.role === 'kiwicodes' ? (
                  <li className='form_li'>
                    <Label text={'Company assigned to'} />
                    <Select
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
                    </Select>
                  </li>
                ) : (
                  <li className='form_li'>
                    <Label text={'Company assigned to'} />
                    <label className='form_right'>{admin.client.name}</label>
                  </li>
                )}
                <li className='form_li'>
                  <Label text={'Password'} />
                  <Input
                    type='password'
                    name='password'
                    value={password || ''}
                    onChange={(e) => handleChangeDetails(e)}
                  ></Input>
                </li>
                <li className='form_li'>
                  <Label text={'Confirm password'} />
                  <Input
                    type='password'
                    name='password2'
                    value={password2 || ''}
                    onChange={(e) => handleChangeDetails(e)}
                  ></Input>
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
  auth: state.auth,
});

export default connect(mapStateToProps, { setAlert, getClients })(MemberForm);
