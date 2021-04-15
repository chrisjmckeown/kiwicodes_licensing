import api from '../utils/api';
import {
  ADD_MEMBER,
  DELETE_MEMBER,
  EDIT_MEMBER,
  GET_MEMBER,
  GET_MEMBERS,
  AUTH_MEMBER_UPDATE,
  LOGOUT,
  CLEAR_MEMBER,
} from './types';
import { setAlert } from './alertActions';

export const getMembers = (member) => async (dispatch) => {
  try {
    let res = null;
    if (member.role === 'kiwicodes') {
      res = await api.get('/members');
    } else {
      res = await api.get(`/members/byClientId/${member.clientId}`);
    }
    dispatch({
      type: GET_MEMBERS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};
export const getMember = ({ id }) => async (dispatch) => {
  try {
    const res = await api.get(`/members/${id}`);
    dispatch({
      type: GET_MEMBER,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};
export const getMemberByEmail = (email) => async (dispatch) => {
  try {
    const res = await api.get(`/members/email/${email}`);
    return res;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};
export const addMember = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/members', formData);
    dispatch({
      type: ADD_MEMBER,
      payload: res.data.member,
    });

    dispatch(setAlert('Member Created', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};
export const editMember = (id, formData) => async (dispatch) => {
  try {
    const res = await api.put(`/members/${id}`, formData);

    dispatch({
      type: EDIT_MEMBER,
      payload: res.data,
    });

    dispatch(setAlert('Member Updated', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};
export const editYourAccount = (id, formData) => async (dispatch) => {
  try {
    const res = await api.put(`/members/${id}`, formData);
    dispatch({
      type: EDIT_MEMBER,
      payload: res.data,
    });
    dispatch({
      type: AUTH_MEMBER_UPDATE,
      payload: res.data,
    });

    dispatch(setAlert('Member Updated', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};
export const deleteMember = (id) => async (dispatch) => {
  try {
    await api.delete(`/members/${id}`);

    dispatch({
      type: DELETE_MEMBER,
      payload: id,
    });

    dispatch(setAlert('Member Removed', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};
export const resetPassword = (email) => async (dispatch) => {
  try {
    const member = {
      email,
    };
    const body = JSON.stringify(member);
    await api.post('/members/resetpassword', body);
    dispatch({ type: LOGOUT });
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};
export const clearMember = () => async (dispatch) => {
  dispatch({
    type: CLEAR_MEMBER,
  });
};
