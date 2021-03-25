import {
  ADD_CLIENT,
  DELETE_CLIENT,
  EDIT_CLIENT,
  GET_CLIENT,
  GET_CLIENTS,
} from '../actions/types';

const initialState = {
  client: null,
  clients: [],
  loading: true,
};

export const client = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CLIENT:
      return {
        ...state,
        clients: [payload, ...state.clients],
        loading: false,
      };
    case DELETE_CLIENT:
      return {
        ...state,
        clients: state.clients.filter((client) => client.id !== payload),
        loading: false,
      };
    case EDIT_CLIENT:
      return {
        ...state,
        clients: state.clients.map((client) =>
          client.id === payload.id ? { ...payload } : client
        ),
        loading: false,
      };
    case GET_CLIENT:
      return {
        ...state,
        client: payload,
        loading: false,
      };
    case GET_CLIENTS:
      return {
        ...state,
        clients: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default client;
