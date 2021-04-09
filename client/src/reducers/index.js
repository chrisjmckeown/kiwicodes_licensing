import { combineReducers } from 'redux';
import alert from './alertReducer';
import auth from './authReducer';
import product from './productReducer';
import client from './clientReducer';
import member from './memberReducer';
import app from './appReducer';
import error from './errorReducer';
import profile from './profileReducer';
import licenseKey from './licenseKeyReducer';
import licenseKeyAssignment from './licenseKeyAssignmentReducer';

export default combineReducers({
  alert,
  auth,
  product,
  client,
  member,
  app,
  error,
  profile,
  licenseKey,
  licenseKeyAssignment,
});
