import { combineReducers } from 'redux';
import alert from './alertReducer';
import appActivation from './appActivationReducer';
import appChat from './appChatReducer';
import app from './appReducer';
import audit from './auditReducer';
import auth from './authReducer';
import build from './buildReducer';
import client from './clientReducer';
import error from './errorReducer';
import licenseKeyAssignment from './licenseKeyAssignmentReducer';
import licenseKey from './licenseKeyReducer';
import member from './memberReducer';
import productActivation from './productActivationReducer';
import product from './productReducer';
import profile from './profileReducer';

export default combineReducers({
  alert,
  appActivation,
  appChat,
  app,
  audit,
  auth,
  build,
  client,
  error,
  licenseKeyAssignment,
  licenseKey,
  member,
  productActivation,
  product,
  profile,
});
