import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editYourAccount } from '../../actions/member';

export const MyDetailsForm = ({ member, editYourAccount }) => {
  const [memberDetails, setMemberDetails] = useState({ ...member });
  const {
    id,
    firstName,
    lastName,
    email,
    role,
    avatar,
    active,
    client: { name: clientName },
  } = memberDetails;

  const handleChange = (e) => {
    setMemberDetails((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const updates = {
      firstName,
      lastName,
    };
    await editYourAccount(id, updates);
  };

  return (
    <>
      <form className='std form' onSubmit={onSubmitForm}>
        <div className='form__marginLeft'>
          <h3>Details</h3>
          <ul className='form_ul'>
            <li className='form_li'>
              <div className='form_left'>
                <label>First Name</label>
              </div>
              <input
                className='form_right'
                name='firstName'
                value={firstName}
                onChange={(e) => handleChange(e)}
              ></input>
            </li>
            <li className='form_li'>
              <div className='form_left'>
                <label>Last Name</label>
              </div>
              <input
                className='form_right'
                name='lastName'
                value={lastName}
                onChange={(e) => handleChange(e)}
              ></input>
            </li>
            <li className='form_li'>
              <div className='form_left'>
                <label>Email</label>
              </div>
              <p className='form_right'>{email}</p>
            </li>
            <li className='form_li'>
              <div className='form_left'>
                <label>Role</label>
              </div>
              <p className='form_right'>{role}</p>
            </li>
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
              <p className='form_right'>{active ? 'True' : 'False'}</p>
            </li>
            <li className='form_li'>
              <div className='form_left'>
                <label>Company assigned to</label>
              </div>
              <p className='form_right'>{clientName}</p>
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

MyDetailsForm.propTypes = {
  editYourAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  member: state.auth.member,
});

export default connect(mapStateToProps, { editYourAccount })(MyDetailsForm);
