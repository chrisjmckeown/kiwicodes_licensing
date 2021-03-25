import api from '../utils/api';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './types';
import { setAlert } from './alert';

export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get('/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

export const register = ({ email, password, clientId }) => async (dispatch) => {
  const newMember = {
    email,
    password,
    clientId,
  };
  const body = JSON.stringify(newMember);
  try {
    const res = await api.post('/members', body);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  const member = {
    email,
    password,
  };
  const body = JSON.stringify(member);
  try {
    const res = await api.post('/auth', body);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const updatePassword = ({ id, password, currentPassword }) => async (
  dispatch
) => {
  const updates = {
    id,
    password,
    currentPassword,
  };
  const body = JSON.stringify(updates);
  try {
    const res = await api.post('/members/updatepassword', body);
    if (res.data.result) {
      dispatch(setAlert('Password successfully reset', 'success'));
      dispatch(loadUser());
    }
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const logout = () => (dispatch) => dispatch({ type: LOGOUT });
