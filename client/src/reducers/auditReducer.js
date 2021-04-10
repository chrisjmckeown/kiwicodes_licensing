import {
  ADD_AUDIT,
  DELETE_AUDIT,
  EDIT_AUDIT,
  GET_AUDIT,
  GET_AUDITS,
  CLEAR_AUDITS,
} from '../actions/types';

const initialState = {
  audit: null,
  audits: [],
  loading: true,
};

export const audit = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_AUDIT:
      return {
        ...state,
        audits: [payload, ...state.audits],
        loading: false,
      };
    case DELETE_AUDIT:
      return {
        ...state,
        audits: state.audits.filter((audit) => audit.id !== payload),
        loading: false,
      };
    case EDIT_AUDIT:
      return {
        ...state,
        audits: state.audits.map((audit) =>
          audit.id === payload.id ? { ...payload } : audit
        ),
        loading: false,
      };
    case GET_AUDIT:
      return {
        ...state,
        audit: payload,
        loading: false,
      };
    case GET_AUDITS:
      return {
        ...state,
        audits: payload,
        loading: false,
      };
    case CLEAR_AUDITS:
      return {
        ...state,
        audit: null,
        audits: [],
        loading: false,
      };
    default:
      return state;
  }
};

export default audit;
