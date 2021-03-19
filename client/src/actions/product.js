import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  EDIT_PRODUCT,
  GET_PRODUCTS,
  PRODUCT_ERROR,
} from '../actions/types';
import axios from 'axios';
import { setAlert } from './alert';

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/products');
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
