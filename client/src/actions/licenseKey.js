import api from '../utils/api';
import {
  ADD_LICENSEKEY,
  DELETE_LICENSEKEY,
  EDIT_LICENSEKEY,
  GET_LICENSEKEY,
  GET_LICENSEKEYS,
  CLEAR_LICENSEKEYS,
} from '../actions/types';
import { setAlert } from './alert';

export const getLicenseKeys = () => async (dispatch) => {
  try {
    const res = await api.get('/licensekeys');
    dispatch({
      type: GET_LICENSEKEYS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const getLicenseKey = ({ id }) => async (dispatch) => {
  try {
    const res = await api.get(`/licensekeys/${id}`);
    dispatch({
      type: GET_LICENSEKEY,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const addLicenseKey = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/licensekeys', formData);

    dispatch({
      type: ADD_LICENSEKEY,
      payload: res.data,
    });

    dispatch(setAlert('License Key Created', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};

export const editLicenseKey = (id, formData) => async (dispatch) => {
  try {
    const res = await api.put(`/licensekeys/${id}`, formData);

    dispatch({
      type: EDIT_LICENSEKEY,
      payload: res.data,
    });

    dispatch(setAlert('License Key Updated', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};

export const deleteLicenseKey = (id) => async (dispatch) => {
  try {
    await api.delete(`/licensekeys/${id}`);

    dispatch({
      type: DELETE_LICENSEKEY,
      payload: id,
    });

    dispatch(setAlert('License Key Removed', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};
export const clearLicenseKey = () => async (dispatch) => {
  dispatch({
    type: CLEAR_LICENSEKEYS,
  });
};
