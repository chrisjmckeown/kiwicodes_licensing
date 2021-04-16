import moment from 'moment';
import {
  ADD_APPACTIVATION,
  DELETE_APPACTIVATION,
  EDIT_APPACTIVATION,
  GET_APPACTIVATION,
  GET_APPACTIVATIONS,
  CLEAR_APPACTIVATIONS,
  SET_APPACTIVATIONS_START_DATE,
  SET_APPACTIVATIONS_END_DATE,
  SET_APPACTIVATIONS_NAME_FILTER,
  SET_APPACTIVATIONS_MEMBER_FILTER,
  SET_APPACTIVATIONS_COMPANY_FILTER,
} from '../actions/types';

const initialState = {
  appActivation: null,
  appActivations: [],
  loading: true,
  filterStartDate: moment().startOf('month'),
  filterEndDate: moment().endOf('month'),
  filterName: '',
  filterMember: '',
  filterCompany: '',
};

export const appActivation = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_APPACTIVATION:
      return {
        ...state,
        appActivations: [payload, ...state.appActivations],
        loading: false,
      };
    case DELETE_APPACTIVATION:
      return {
        ...state,
        appActivations: state.appActivations.filter(
          (appActivation) => appActivation.id !== payload
        ),
        loading: false,
      };
    case EDIT_APPACTIVATION:
      return {
        ...state,
        appActivations: state.appActivations.map((appActivation) =>
          appActivation.id === payload.id ? { ...payload } : appActivation
        ),
        loading: false,
      };
    case GET_APPACTIVATION:
      return {
        ...state,
        appActivation: payload,
        loading: false,
      };
    case GET_APPACTIVATIONS:
      return {
        ...state,
        appActivations: payload,
        loading: false,
      };
    case SET_APPACTIVATIONS_START_DATE:
      return {
        ...state,
        filterStartDate: payload,
      };
    case SET_APPACTIVATIONS_END_DATE:
      return {
        ...state,
        filterEndDate: payload,
      };
    case SET_APPACTIVATIONS_NAME_FILTER:
      return {
        ...state,
        filterName: payload,
      };
    case SET_APPACTIVATIONS_MEMBER_FILTER:
      return {
        ...state,
        filterMember: payload,
      };
    case SET_APPACTIVATIONS_COMPANY_FILTER:
      return {
        ...state,
        filterCompany: payload,
      };
    case CLEAR_APPACTIVATIONS:
      return {
        ...state,
        appActivation: null,
        appActivations: [],
        loading: false,
        filterStartDate: moment().startOf('month'),
        filterEndDate: moment().endOf('month'),
        filterName: '',
        filterMember: '',
        filterCompany: '',
      };
    default:
      return state;
  }
};

export default appActivation;
