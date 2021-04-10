import api from '../utils/api';
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  GET_PRODUCT,
  GET_PRODUCTS,
  CLEAR_PRODUCTS,
} from '../actions/types';
import { setAlert } from './alert';

export const getProducts = (memberId = 0) => async (dispatch) => {
  try {
    let res;
    if (memberId === 0) {
      res = await api.get('/products');
    } else {
      res = await api.get(`/products/byMemberId/${memberId}`);
    }
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const getProduct = ({ id }) => async (dispatch) => {
  try {
    const res = await api.get(`/products/${id}`);
    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const addProduct = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/products', formData);

    dispatch({
      type: ADD_PRODUCT,
      payload: res.data,
    });

    dispatch(setAlert('Product Created', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};

export const editProduct = (id, formData) => async (dispatch) => {
  try {
    const res = await api.put(`/products/${id}`, formData);

    dispatch({
      type: EDIT_PRODUCT,
      payload: res.data,
    });

    dispatch(setAlert('Product Updated', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await api.delete(`/products/${id}`);

    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });

    dispatch(setAlert('Product Removed', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};
export const clearProduct = () => async (dispatch) => {
  dispatch({
    type: CLEAR_PRODUCTS,
  });
};
