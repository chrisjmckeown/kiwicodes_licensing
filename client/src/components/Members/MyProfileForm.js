import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addProfile, getMyProfile } from '../../actions/profile';
import Spinner from '../Spinner';

export const MyProfileForm = ({
  addProfile,
  getMyProfile,
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getMyProfile();
  }, [getMyProfile]);

  const [profileDetails, setProfileDetails] = useState({ ...profile });
  const {
    id,
    company,
    website,
    location,
    status,
    skills,
    bio,
  } = profileDetails;

  const handleChange = (e) => {
    setProfileDetails((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const updates = {
      id,
      company,
      website,
      location,
      status,
      skills,
      bio,
    };
    addProfile(updates);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <form className='std form' onSubmit={onSubmitForm}>
            <div className='form__marginLeft'>
              <h3>Profile</h3>
              <ul className='form_ul'>
                <li className='form_li'>
                  <div className='form_left'>
                    <label>Company</label>
                  </div>
                  <input
                    className='form__input'
                    name='company'
                    value={company}
                    onChange={(e) => handleChange(e)}
                  ></input>
                </li>
                <li className='form_li'>
                  <div className='form_left'>
                    <label>Website</label>
                  </div>
                  <input
                    className='form__input'
                    name='website'
                    value={website}
                    onChange={(e) => handleChange(e)}
                  ></input>
                </li>
                <li className='form_li'>
                  <div className='form_left'>
                    <label>Location</label>
                  </div>
                  <input
                    className='form__input'
                    name='location'
                    value={location}
                    onChange={(e) => handleChange(e)}
                  ></input>
                </li>
                <li className='form_li'>
                  <div className='form_left'>
                    <label>Status</label>
                  </div>
                  <input
                    className='form__input'
                    name='status'
                    value={status}
                    onChange={(e) => handleChange(e)}
                  ></input>
                </li>
                <li className='form_li'>
                  <div className='form_left'>
                    <label>Skills</label>
                  </div>
                  <textarea
                    className='form__textarea'
                    name='skills'
                    value={skills}
                    onChange={(e) => handleChange(e)}
                  ></textarea>
                </li>
                <li className='form_li'>
                  <div className='form_left'>
                    <label>Bio</label>
                  </div>
                  <textarea
                    className='form__textarea'
                    name='bio'
                    value={bio}
                    onChange={(e) => handleChange(e)}
                  ></textarea>
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

MyProfileForm.propTypes = {
  addProfile: PropTypes.func.isRequired,
  getMyProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { addProfile, getMyProfile })(
  MyProfileForm
);
