import api from '../utils/api';
import {
  ADD_APPCHAT,
  DELETE_APPCHAT,
  EDIT_APPCHAT,
  GET_APPCHAT,
  GET_APPCHATS,
  CLEAR_APPCHATS,
} from '../actions/types';
import { setAlert } from './alert';

export const getAppChats = () => async (dispatch) => {
  try {
    const res = await api.get('/appchats');
    dispatch({
      type: GET_APPCHATS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const getAppChat = ({ id }) => async (dispatch) => {
  try {
    const res = await api.get(`/appchats/${id}`);
    dispatch({
      type: GET_APPCHAT,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const addAppChat = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/appchats', formData);

    dispatch({
      type: ADD_APPCHAT,
      payload: res.data,
    });

    dispatch(setAlert('App Chat Created', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};

export const editAppChat = (id, formData) => async (dispatch) => {
  try {
    const res = await api.put(`/appchats/${id}`, formData);

    dispatch({
      type: EDIT_APPCHAT,
      payload: res.data,
    });

    dispatch(setAlert('App Chat Updated', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};

export const deleteAppChat = (id) => async (dispatch) => {
  try {
    await api.delete(`/appchats/${id}`);

    dispatch({
      type: DELETE_APPCHAT,
      payload: id,
    });

    dispatch(setAlert('App Chat Removed', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};
export const clearAppChat = () => async (dispatch) => {
  dispatch({
    type: CLEAR_APPCHATS,
  });
};
