import {
  ADD_ERROR,
  DELETE_ERROR,
  EDIT_ERROR,
  GET_ERROR,
  GET_ERRORS,
} from '../actions/types';

const initialState = {
  error: null,
  errors: [],
  loading: true,
};

export const error = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ERROR:
      return {
        ...state,
        errors: [payload, ...state.errors],
        loading: false,
      };
    case DELETE_ERROR:
      return {
        ...state,
        errors: state.errors.filter((error) => error.id !== payload),
        loading: false,
      };
    case EDIT_ERROR:
      return {
        ...state,
        errors: state.errors.map((error) =>
          error.id === payload.id ? { ...payload } : error
        ),
        loading: false,
      };
    case GET_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case GET_ERRORS:
      return {
        ...state,
        errors: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default error;
