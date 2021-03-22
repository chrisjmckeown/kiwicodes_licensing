import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../../actions/alert';

export const MemberForm = ({ member, setAlert, onSubmit }) => {
  const [id] = useState(member ? member.id : '');
  const [firstName, setFirstName] = useState(member ? member.firstName : '');
  const [lastName, setLastName] = useState(member ? member.lastName : '');
  const [role, setRole] = useState(member ? member.role : '');
  const [email, setEmail] = useState(member ? member.email : '');
  const [password, setPassword] = useState(member ? member.password : '');
  const [avatar, setAvatar] = useState(member ? member.avatar : '');
  const [active, setActive] = useState(member ? member.active : '');

  const onSubmitForm = async (e) => {
    e.preventDefault();
    onSubmit({
      firstName,
      lastName,
      role,
      email,
      password,
      avatar,
      active,
    });
  };

  return (
    <>
      <form className='std form' onSubmit={onSubmitForm}>
        <fieldset className='form__fieldset'>
          <div className='form__marginLeft'>
            <h3>Member {id}</h3>
            <>
              <label className='form__text form__label'>First Name</label>
              <input
                className='form__input'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              ></input>
            </>
            <>
              <label className='form__text form__label'>Last Name</label>
              <input
                className='form__input'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              ></input>
            </>
            <>
              <label className='form__text form__label'>Role</label>
              <input
                className='form__input'
                value={role}
                onChange={(e) => setRole(e.target.value)}
              ></input>
            </>
            <>
              <label className='form__text form__label'>Email</label>
              <input
                className='form__input'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </>
            <>
              <label className='form__text form__label'>Password</label>
              <input
                className='form__input'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </>
            <>
              <label className='form__text form__label'>Avatar</label>
              <input
                className='form__input'
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
              ></input>
            </>
            <>
              <label className='form__text form__label'>Active</label>
              <input
                className='form__input'
                value={active}
                onChange={(e) => setActive(e.target.value)}
              ></input>
            </>
            <p className='form__submit form__marginTop'>
              <input type='submit' className='button__large'></input>
            </p>
          </div>
        </fieldset>
      </form>
    </>
  );
};

MemberForm.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(undefined, { setAlert })(MemberForm);
