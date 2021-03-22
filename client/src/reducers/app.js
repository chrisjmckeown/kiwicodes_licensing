import {
  ADD_APP,
  DELETE_APP,
  EDIT_APP,
  GET_APP,
  GET_APPS,
} from '../actions/types';

const initialState = {
  app: null,
  apps: [],
  loading: true,
};

export const app = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_APP:
      return {
        ...state,
        apps: [payload, ...state.apps],
        loading: false,
      };
    case DELETE_APP:
      return {
        ...state,
        apps: state.apps.filter((app) => app.id !== payload),
        loading: false,
      };
    case EDIT_APP:
      return {
        ...state,
        apps: state.apps.map((app) =>
          app.id === payload.id ? { ...payload } : app
        ),
        loading: false,
      };
    case GET_APP:
      return {
        ...state,
        app: payload,
        loading: false,
      };
    case GET_APPS:
      return {
        ...state,
        apps: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default app;
