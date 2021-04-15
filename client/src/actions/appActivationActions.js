import api from '../utils/api';
import {
  ADD_APPACTIVATION,
  DELETE_APPACTIVATION,
  EDIT_APPACTIVATION,
  GET_APPACTIVATION,
  GET_APPACTIVATIONS,
  CLEAR_APPACTIVATIONS,
} from '../actions/types';
import { setAlert } from './alertActions';

export const getAppActivations = (premissionLevel) => async (dispatch) => {
  try {
    let res;
    if (premissionLevel === 'kiwicodes') {
      // get all
      res = await api.get('/appactivations');
    } else if (premissionLevel === 'admin') {
      // get by client id
      res = await api.get('/appactivations/byClientId');
    } else {
      // get by member id
      res = await api.get('/appactivations/byMemberId');
    }
    dispatch({
      type: GET_APPACTIVATIONS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const getAppActivation = ({ id }) => async (dispatch) => {
  try {
    const res = await api.get(`/appactivations/${id}`);
    dispatch({
      type: GET_APPACTIVATION,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const addAppActivation = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/appactivations', formData);

    dispatch({
      type: ADD_APPACTIVATION,
      payload: res.data,
    });

    dispatch(setAlert('App Activation Created', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};

export const editAppActivation = (id, formData) => async (dispatch) => {
  try {
    const res = await api.put(`/appactivations/${id}`, formData);

    dispatch({
      type: EDIT_APPACTIVATION,
      payload: res.data,
    });

    dispatch(setAlert('App Activation Updated', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};

export const deleteAppActivation = (id) => async (dispatch) => {
  try {
    await api.delete(`/appactivations/${id}`);

    dispatch({
      type: DELETE_APPACTIVATION,
      payload: id,
    });

    dispatch(setAlert('App Activation Removed', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};
export const clearAppActivation = () => async (dispatch) => {
  dispatch({
    type: CLEAR_APPACTIVATIONS,
  });
};
