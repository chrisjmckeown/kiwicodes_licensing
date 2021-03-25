import {
  ADD_PROFILE,
  DELETE_PROFILE,
  EDIT_PROFILE,
  GET_PROFILE,
  GET_PROFILES,
} from '../actions/types';

const initialState = {
  profile: null,
  profiles: [],
  loading: true,
};

export const profile = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_PROFILE:
      return {
        ...state,
        profile: payload,
        profiles: [payload, ...state.profiles],
        loading: false,
      };
    case DELETE_PROFILE:
      return {
        ...state,
        profiles: state.profiles.filter((profile) => profile.id !== payload),
        loading: false,
      };
    case EDIT_PROFILE:
      return {
        ...state,
        profiles: state.profiles.map((profile) =>
          profile.id === payload.id ? { ...payload } : profile
        ),
        loading: false,
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default profile;
