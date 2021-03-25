import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../actions/alert';

export const MemberForm = ({ member, setAlert, onSubmit }) => {
  const [id] = useState(member ? member.id : '');
  const [firstName, setFirstName] = useState(member ? member.firstName : '');
  const [lastName, setLastName] = useState(member ? member.lastName : '');
  const [role, setRole] = useState(member ? member.role : '');
  const [avatar, setAvatar] = useState(member ? member.avatar : '');
  const [active, setActive] = useState(member ? member.active : '');
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();

  const [company, setCompany] = useState();
  const [website, setWebsite] = useState();
  const [location, setLocation] = useState();
  const [status, setStatus] = useState();
  const [skills, setSkills] = useState();
  const [bio, setBio] = useState();
  const onSubmitForm = async (e) => {
    e.preventDefault();
    onSubmit({
      firstName,
      lastName,
      role,
      avatar,
      active,
    });
  };

  return (
    <>
      <form className='std form' onSubmit={onSubmitForm}>
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
              type='checkbox'
              id='active'
              defaultChecked={active}
              onChange={(e) => setActive(!active)}
            ></input>
          </>
          <>
            <label className='form__text form__label'>Password</label>
            <span>
              <input
                type='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='form__input'
              ></input>
            </span>
          </>
          <>
            <label className='form__text form__label'>Confirm password</label>
            <span>
              <input
                type='password'
                name='password2'
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                className='form__input'
              ></input>
            </span>
          </>

          <>
            <label className='form__text form__label'>Company</label>
            <input
              className='form__input'
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            ></input>
          </>
          <>
            <label className='form__text form__label'>Website</label>
            <input
              className='form__input'
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            ></input>
          </>
          <>
            <label className='form__text form__label'>Location</label>
            <input
              className='form__input'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            ></input>
          </>
          <>
            <label className='form__text form__label'>Status</label>
            <input
              className='form__input'
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            ></input>
          </>
          <>
            <label className='form__text form__label'>Skills</label>
            <textarea
              className='form__textarea'
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            ></textarea>
          </>
          <>
            <label className='form__text form__label'>Bio</label>
            <textarea
              className='form__textarea'
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </>
          <p className='form__submit form__marginTop'>
            <input type='submit' className='button__large'></input>
          </p>
        </div>
      </form>
    </>
  );
};

MemberForm.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(undefined, { setAlert })(MemberForm);
