import api from '../utils/api';
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  GET_PRODUCT,
  GET_PRODUCTS,
  PRODUCT_ERROR,
} from '../actions/types';
import { setAlert } from './alert';

export const getProducts = () => async (dispatch) => {
  try {
    const res = await api.get('/products');
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
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
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
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
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
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
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
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
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
