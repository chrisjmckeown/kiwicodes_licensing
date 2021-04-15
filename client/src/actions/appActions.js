import api from '../utils/api';
import {
  ADD_APP,
  DELETE_APP,
  EDIT_APP,
  GET_APP,
  GET_APPS,
  CLEAR_APPS,
} from '../actions/types';
import { setAlert } from './alertActions';

export const getApps = (productId = 0) => async (dispatch) => {
  try {
    let res;
    if (productId === 0) {
      res = await api.get('/apps');
    } else {
      res = await api.get(`/apps/byProductId/${productId}`);
    }
    dispatch({
      type: GET_APPS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const getApp = ({ id }) => async (dispatch) => {
  try {
    const res = await api.get(`/apps/${id}`);
    dispatch({
      type: GET_APP,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const addApp = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/apps', formData);

    dispatch({
      type: ADD_APP,
      payload: res.data,
    });

    dispatch(setAlert('App Created', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};

export const editApp = (id, formData) => async (dispatch) => {
  try {
    const res = await api.put(`/apps/${id}`, formData);

    dispatch({
      type: EDIT_APP,
      payload: res.data,
    });

    dispatch(setAlert('App Updated', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};

export const deleteApp = (id) => async (dispatch) => {
  try {
    await api.delete(`/apps/${id}`);

    dispatch({
      type: DELETE_APP,
      payload: id,
    });

    dispatch(setAlert('App Removed', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};
export const clearApp = () => async (dispatch) => {
  dispatch({
    type: CLEAR_APPS,
  });
};
