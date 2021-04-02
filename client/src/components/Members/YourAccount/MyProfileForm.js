import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addProfile, getMyProfile } from '../../../actions/profile';
import Spinner from '../../Spinner';

export const MyProfileForm = ({
  addProfile,
  getMyProfile,
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getMyProfile();
  }, [getMyProfile]);

  const [profileDetails, setProfileDetails] = useState({});
  const { company, website, location, status, skills, bio } = profile || {};

  const handleChange = (e) => {
    setProfileDetails((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const updates = {
      id: profileDetails.id,
      company: profileDetails.company,
      website: profileDetails.website,
      location: profileDetails.location,
      status: profileDetails.status,
      skills: profileDetails.skills,
      bio: profileDetails.bio,
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
                    className='form_right'
                    name='company'
                    value={profileDetails.company || company}
                    onChange={(e) => handleChange(e)}
                  ></input>
                </li>
                <li className='form_li'>
                  <div className='form_left'>
                    <label>Website</label>
                  </div>
                  <input
                    className='form_right'
                    name='website'
                    value={profileDetails.website || website}
                    onChange={(e) => handleChange(e)}
                  ></input>
                </li>
                <li className='form_li'>
                  <div className='form_left'>
                    <label>Location</label>
                  </div>
                  <input
                    className='form_right'
                    name='location'
                    value={profileDetails.location || location}
                    onChange={(e) => handleChange(e)}
                  ></input>
                </li>
                <li className='form_li'>
                  <div className='form_left'>
                    <label>Status</label>
                  </div>
                  <input
                    className='form_right'
                    name='status'
                    value={profileDetails.status || status}
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
                    value={profileDetails.skills || skills}
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
                    value={profileDetails.bio || bio}
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
