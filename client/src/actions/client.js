import api from '../utils/api';
import {
  ADD_CLIENT,
  DELETE_CLIENT,
  EDIT_CLIENT,
  GET_CLIENT,
  GET_CLIENTS,
} from '../actions/types';
import { setAlert } from './alert';

export const getClients = () => async (dispatch) => {
  try {
    const res = await api.get('/clients');
    dispatch({
      type: GET_CLIENTS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const getClient = ({ id }) => async (dispatch) => {
  try {
    const res = await api.get(`/clients/${id}`);
    dispatch({
      type: GET_CLIENT,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const addClient = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/clients', formData);

    dispatch({
      type: ADD_CLIENT,
      payload: res.data,
    });

    dispatch(setAlert('Client Created', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};

export const editClient = (id, formData) => async (dispatch) => {
  try {
    console.log(formData);
    const res = await api.put(`/clients/${id}`, formData);

    dispatch({
      type: EDIT_CLIENT,
      payload: res.data,
    });

    dispatch(setAlert('Client Updated', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};

export const deleteClient = (id) => async (dispatch) => {
  try {
    await api.delete(`/clients/${id}`);

    dispatch({
      type: DELETE_CLIENT,
      payload: id,
    });

    dispatch(setAlert('Client Removed', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};
