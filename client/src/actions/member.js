import api from '../utils/api';
import {
  ADD_MEMBER,
  DELETE_MEMBER,
  EDIT_MEMBER,
  GET_MEMBER,
  GET_MEMBERS,
} from '../actions/types';
import { setAlert } from './alert';

export const getMembers = () => async (dispatch) => {
  try {
    const res = await api.get('/members');
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

export const addMember = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/members', formData);

    dispatch({
      type: ADD_MEMBER,
      payload: res.data,
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
