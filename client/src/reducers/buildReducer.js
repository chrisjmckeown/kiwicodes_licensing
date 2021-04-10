import {
  ADD_BUILD,
  DELETE_BUILD,
  EDIT_BUILD,
  GET_BUILD,
  GET_BUILDS,
  CLEAR_BUILDS,
} from '../actions/types';

const initialState = {
  build: null,
  builds: [],
  loading: true,
};

export const build = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BUILD:
      return {
        ...state,
        builds: [payload, ...state.builds],
        loading: false,
      };
    case DELETE_BUILD:
      return {
        ...state,
        builds: state.builds.filter((build) => build.id !== payload),
        loading: false,
      };
    case EDIT_BUILD:
      return {
        ...state,
        builds: state.builds.map((build) =>
          build.id === payload.id ? { ...payload } : build
        ),
        loading: false,
      };
    case GET_BUILD:
      return {
        ...state,
        build: payload,
        loading: false,
      };
    case GET_BUILDS:
      return {
        ...state,
        builds: payload,
        loading: false,
      };
    case CLEAR_BUILDS:
      return {
        ...state,
        build: null,
        builds: [],
        loading: false,
      };
    default:
      return state;
  }
};

export default build;
