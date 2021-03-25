import api from '../utils/api';
import {
  ADD_PROFILE,
  DELETE_PROFILE,
  EDIT_PROFILE,
  GET_PROFILE,
  GET_PROFILES,
  CLEAR_PROFILES,
} from '../actions/types';
import { setAlert } from './alert';

export const getProfiles = () => async (dispatch) => {
  try {
    const res = await api.get('/profiles');
    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const getProfile = ({ id }) => async (dispatch) => {
  try {
    const res = await api.get(`/profiles/${id}`);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const getMyProfile = () => async (dispatch) => {
  try {
    const res = await api.get('/profiles/me');
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const addProfile = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/profiles', formData);

    dispatch({
      type: ADD_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert('Profile Created/Updated', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};

export const editProfile = (id, formData) => async (dispatch) => {
  try {
    const res = await api.put(`/profiles/${id}`, formData);

    dispatch({
      type: EDIT_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert('Profile Updated', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};

export const deleteProfile = (id) => async (dispatch) => {
  try {
    await api.delete(`/profiles/${id}`);

    dispatch({
      type: DELETE_PROFILE,
      payload: id,
    });

    dispatch(setAlert('Profile Removed', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};
export const clearProfile = () => async (dispatch) => {
  dispatch({
    type: CLEAR_PROFILES,
  });
};
