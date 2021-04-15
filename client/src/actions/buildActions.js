import api from '../utils/api';
import {
  ADD_BUILD,
  DELETE_BUILD,
  EDIT_BUILD,
  GET_BUILD,
  GET_BUILDS,
  CLEAR_BUILDS,
} from '../actions/types';
import { setAlert } from './alertActions';

export const getBuilds = () => async (dispatch) => {
  try {
    const res = await api.get('/builds');
    dispatch({
      type: GET_BUILDS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const getBuild = ({ id }) => async (dispatch) => {
  try {
    const res = await api.get(`/builds/${id}`);
    dispatch({
      type: GET_BUILD,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const addBuild = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/builds', formData);

    dispatch({
      type: ADD_BUILD,
      payload: res.data,
    });

    dispatch(setAlert('Build Created', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};

export const editBuild = (id, formData) => async (dispatch) => {
  try {
    const res = await api.put(`/builds/${id}`, formData);

    dispatch({
      type: EDIT_BUILD,
      payload: res.data,
    });

    dispatch(setAlert('Build Updated', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};

export const deleteBuild = (id) => async (dispatch) => {
  try {
    await api.delete(`/builds/${id}`);

    dispatch({
      type: DELETE_BUILD,
      payload: id,
    });

    dispatch(setAlert('Build Removed', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};
export const clearBuild = () => async (dispatch) => {
  dispatch({
    type: CLEAR_BUILDS,
  });
};
