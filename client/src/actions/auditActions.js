import api from '../utils/api';
import {
  ADD_AUDIT,
  DELETE_AUDIT,
  EDIT_AUDIT,
  GET_AUDIT,
  GET_AUDITS,
  CLEAR_AUDITS,
} from '../actions/types';
import { setAlert } from './alert';

export const getAudits = (productId = 0) => async (dispatch) => {
  try {
    let res;
    if (productId === 0) {
      res = await api.get('/audits');
    } else {
      res = await api.get(`/audits/byProductId/${productId}`);
    }
    dispatch({
      type: GET_AUDITS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const getAudit = ({ id }) => async (dispatch) => {
  try {
    const res = await api.get(`/audits/${id}`);
    dispatch({
      type: GET_AUDIT,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const addAudit = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/audits', formData);

    dispatch({
      type: ADD_AUDIT,
      payload: res.data,
    });

    dispatch(setAlert('Audit Created', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};

export const editAudit = (id, formData) => async (dispatch) => {
  try {
    const res = await api.put(`/audits/${id}`, formData);

    dispatch({
      type: EDIT_AUDIT,
      payload: res.data,
    });

    dispatch(setAlert('Audit Updated', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};

export const deleteAudit = (id) => async (dispatch) => {
  try {
    await api.delete(`/audits/${id}`);

    dispatch({
      type: DELETE_AUDIT,
      payload: id,
    });

    dispatch(setAlert('Audit Removed', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};
export const clearAudit = () => async (dispatch) => {
  dispatch({
    type: CLEAR_AUDITS,
  });
};
