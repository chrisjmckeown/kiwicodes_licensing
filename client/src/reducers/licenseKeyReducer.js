import {
  ADD_LICENSEKEY,
  DELETE_LICENSEKEY,
  EDIT_LICENSEKEY,
  GET_LICENSEKEY,
  GET_LICENSEKEYS,
  CLEAR_LICENSEKEYS,
} from '../actions/types';

const initialState = {
  licenseKey: null,
  licenseKeys: [],
  loading: true,
};

export const licenseKeyReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_LICENSEKEY:
      return {
        ...state,
        licenseKeys: [payload, ...state.licenseKeys],
        loading: false,
      };
    case DELETE_LICENSEKEY:
      return {
        ...state,
        licenseKeys: state.licenseKeys.filter(
          (licenseKey) => licenseKey.id !== payload
        ),
        loading: false,
      };
    case EDIT_LICENSEKEY:
      return {
        ...state,
        licenseKeys: state.licenseKeys.map((licenseKey) =>
          licenseKey.id === payload.id ? { ...payload } : licenseKey
        ),
        loading: false,
      };
    case GET_LICENSEKEY:
      return {
        ...state,
        licenseKey: payload,
        loading: false,
      };
    case GET_LICENSEKEYS:
      return {
        ...state,
        licenseKeys: payload,
        loading: false,
      };
    case CLEAR_LICENSEKEYS:
      return {
        ...state,
        licenseKey: null,
        licenseKeys: [],
        loading: false,
      };
    default:
      return state;
  }
};

export default licenseKeyReducer;
