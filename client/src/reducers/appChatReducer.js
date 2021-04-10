import {
  ADD_APPCHAT,
  DELETE_APPCHAT,
  EDIT_APPCHAT,
  GET_APPCHAT,
  GET_APPCHATS,
  CLEAR_APPCHATS,
} from '../actions/types';

const initialState = {
  appChat: null,
  appChats: [],
  loading: true,
};

export const appChat = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_APPCHAT:
      return {
        ...state,
        appChats: [payload, ...state.appChats],
        loading: false,
      };
    case DELETE_APPCHAT:
      return {
        ...state,
        appChats: state.appChats.filter((appChat) => appChat.id !== payload),
        loading: false,
      };
    case EDIT_APPCHAT:
      return {
        ...state,
        appChats: state.appChats.map((appChat) =>
          appChat.id === payload.id ? { ...payload } : appChat
        ),
        loading: false,
      };
    case GET_APPCHAT:
      return {
        ...state,
        appChat: payload,
        loading: false,
      };
    case GET_APPCHATS:
      return {
        ...state,
        appChats: payload,
        loading: false,
      };
    case CLEAR_APPCHATS:
      return {
        ...state,
        appChat: null,
        appChats: [],
        loading: false,
      };
    default:
      return state;
  }
};

export default appChat;
