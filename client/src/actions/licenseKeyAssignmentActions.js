import api from '../utils/api';
import {
  ADD_LICENSEKEYASSIGNMENT,
  DELETE_LICENSEKEYASSIGNMENT,
  EDIT_LICENSEKEYASSIGNMENT,
  GET_LICENSEKEYASSIGNMENT,
  GET_LICENSEKEYASSIGNMENTS,
  CLEAR_LICENSEKEYASSIGNMENTS,
} from '../actions/types';
import { setAlert } from './alertActions';

export const getLicenseKeyAssignments = (member, licenseKeyId) => async (
  dispatch
) => {
  try {
    let res = null;
    if (member.role === 'kiwicodes') {
      res = await api.get('/licensekeyassignments');
    } else {
      res = await api.get(
        `/licensekeyassignments/byClientIdLicenseKeyId/${member.clientId}/${licenseKeyId}`
      );
    }
    dispatch({
      type: GET_LICENSEKEYASSIGNMENTS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const getLicenseKeyAssignmentsbyLicenseKeyIdMemberId = (
  licenseKeyId,
  memberId
) => async (dispatch) => {
  try {
    const res = await api.get(
      `/licensekeyassignments/${licenseKeyId}/${memberId}`
    );
    dispatch({
      type: GET_LICENSEKEYASSIGNMENTS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const getLicenseKeyAssignment = ({ id }) => async (dispatch) => {
  try {
    const res = await api.get(`/licensekeyassignments/${id}`);
    dispatch({
      type: GET_LICENSEKEYASSIGNMENT,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const addLicenseKeyAssignment = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/licensekeyassignments', formData);

    dispatch({
      type: ADD_LICENSEKEYASSIGNMENT,
      payload: res.data,
    });

    dispatch(setAlert('License Key Assignment Created', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};

export const editLicenseKeyAssignment = (id, formData) => async (dispatch) => {
  try {
    const res = await api.put(`/licensekeyassignments/${id}`, formData);

    dispatch({
      type: EDIT_LICENSEKEYASSIGNMENT,
      payload: res.data,
    });

    dispatch(setAlert('License Key Assignment Updated', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};

export const deleteLicenseKeyAssignment = (payload) => async (dispatch) => {
  try {
    await api.delete(
      `/licensekeyassignments/${payload.licenseKeyAssignmentsId}`
    );

    dispatch({
      type: DELETE_LICENSEKEYASSIGNMENT,
      payload,
    });

    dispatch(setAlert('License Key Assignment Removed', 'success'));
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    return false;
  }
};
export const clearLicenseKeyAssignment = () => async (dispatch) => {
  dispatch({
    type: CLEAR_LICENSEKEYASSIGNMENTS,
  });
};
