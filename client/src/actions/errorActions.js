import api from '../utils/api';
import {
  ADD_ERROR,
  DELETE_ERROR,
  EDIT_ERROR,
  GET_ERROR,
  GET_ERRORS,
  CLEAR_ERROR,
} from '../actions/types';
import { setAlert } from './alertActions';

export const getErrors = () => async (dispatch) => {
  try {
    const res = await api.get('/errors');
    dispatch({
      type: GET_ERRORS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const getError = ({ id }) => async (dispatch) => {
  try {
    const res = await api.get(`/errors/${id}`);
    dispatch({
      type: GET_ERROR,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const addError = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/errors', formData);

    dispatch({
      type: ADD_ERROR,
      payload: res.data,
    });

    dispatch(setAlert('Error Created', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};

export const editError = (id, formData) => async (dispatch) => {
  try {
    const res = await api.put(`/errors/${id}`, formData);

    dispatch({
      type: EDIT_ERROR,
      payload: res.data,
    });

    dispatch(setAlert('Error Updated', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};

export const deleteError = (id) => async (dispatch) => {
  try {
    await api.delete(`/errors/${id}`);

    dispatch({
      type: DELETE_ERROR,
      payload: id,
    });

    dispatch(setAlert('Error Removed', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};
export const clearError = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERROR,
  });
};
