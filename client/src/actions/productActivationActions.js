import api from '../utils/api';
import {
  ADD_PRODUCTACTIVATION,
  DELETE_PRODUCTACTIVATION,
  EDIT_PRODUCTACTIVATION,
  GET_PRODUCTACTIVATION,
  GET_PRODUCTACTIVATIONS,
  CLEAR_PRODUCTACTIVATIONS,
} from '../actions/types';
import { setAlert } from './alert';

export const getProductActivations = () => async (dispatch) => {
  try {
    let res = await api.get('/productActivations');
    dispatch({
      type: GET_PRODUCTACTIVATIONS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const getProductActivation = ({ id }) => async (dispatch) => {
  try {
    const res = await api.get(`/productActivations/${id}`);
    dispatch({
      type: GET_PRODUCTACTIVATION,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const addProductActivation = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/productActivations', formData);

    dispatch({
      type: ADD_PRODUCTACTIVATION,
      payload: res.data,
    });

    dispatch(setAlert('Product Activation Created', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};

export const checkProductActivation = (formData) => async (dispatch) => {
  try {
    const res = await api.put(`/productActivations/check`, formData);

    // console.log('results', res.data.result);
    // res.data.result &&
    dispatch(setAlert(res.data.msg, 'general'));
    return res.data.result;
  } catch (err) {
    console.log('err', err);
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};

export const editProductActivation = (formData) => async (dispatch) => {
  try {
    const res = await api.put(`/productActivations/`, formData);

    dispatch({
      type: EDIT_PRODUCTACTIVATION,
      payload: res.data,
    });

    dispatch(setAlert('Product Activation Updated', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};

export const deleteProductActivation = (id) => async (dispatch) => {
  try {
    await api.delete(`/productActivations/${id}`);

    dispatch({
      type: DELETE_PRODUCTACTIVATION,
      payload: id,
    });

    dispatch(setAlert('Product Activation Removed', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};
export const clearProductActivation = () => async (dispatch) => {
  dispatch({
    type: CLEAR_PRODUCTACTIVATIONS,
  });
};
