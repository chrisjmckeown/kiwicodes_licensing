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
import { setAlert } from './alertActions';
import { clearApp } from './appActions';
import { clearAppActivation } from './appActivationActions';
import { clearAppChat } from './appChatActions';
import { clearAudit } from './auditActions';
import { clearBuild } from './buildActions';
import { clearClient } from './clientActions';
import { clearError } from './errorActions';
import { clearLicenseKey } from './licenseKeyActions';
import { clearLicenseKeyAssignment } from './licenseKeyAssignmentActions';
import { clearMember } from './memberActions';
import { clearProduct } from './productActions';
import { clearProductActivation } from './productActivationActions';
import { clearProfile } from './profileActions';

export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get('/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
    clearState(dispatch);
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
    dispatch({ type: REGISTER_FAIL });
    clearState(dispatch);
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
    dispatch({ type: LOGIN_FAIL });
    clearState(dispatch);
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

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  clearState(dispatch);
};

const clearState = (dispatch) => {
  dispatch(clearApp());
  dispatch(clearAppActivation());
  dispatch(clearAppChat());
  dispatch(clearAudit());
  dispatch(clearBuild());
  dispatch(clearClient());
  dispatch(clearError());
  dispatch(clearLicenseKey());
  dispatch(clearLicenseKeyAssignment());
  dispatch(clearMember());
  dispatch(clearProduct());
  dispatch(clearProductActivation());
  dispatch(clearProfile());
};
