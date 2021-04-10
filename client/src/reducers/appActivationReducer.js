import {
  ADD_APPACTIVATION,
  DELETE_APPACTIVATION,
  EDIT_APPACTIVATION,
  GET_APPACTIVATION,
  GET_APPACTIVATIONS,
  CLEAR_APPACTIVATIONS,
} from '../actions/types';

const initialState = {
  appActivation: null,
  appActivations: [],
  loading: true,
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
    case CLEAR_APPACTIVATIONS:
      return {
        ...state,
        appActivation: null,
        appActivations: [],
        loading: false,
      };
    default:
      return state;
  }
};

export default appActivation;
