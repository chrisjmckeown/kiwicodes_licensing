import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import product from './product';
import client from './client';
import member from './member';
import app from './app';
import error from './error';
import profile from './profile';

export default combineReducers({
  alert,
  auth,
  product,
  client,
  member,
  app,
  error,
  profile,
});
