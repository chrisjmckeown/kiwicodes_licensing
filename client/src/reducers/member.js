import {
  ADD_MEMBER,
  DELETE_MEMBER,
  EDIT_MEMBER,
  GET_MEMBER,
  GET_MEMBERS,
} from '../actions/types';

const initialState = {
  member: null,
  members: [],
  loading: true,
};

export const member = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_MEMBER:
      return {
        ...state,
        members: [payload, ...state.members],
        loading: false,
      };
    case DELETE_MEMBER:
      return {
        ...state,
        members: state.members.filter((member) => member.id !== payload),
        loading: false,
      };
    case EDIT_MEMBER:
      return {
        ...state,
        members: state.members.map((member) =>
          member.id === payload.id ? { ...payload } : member
        ),
        loading: false,
      };
    case GET_MEMBER:
      return {
        ...state,
        member: payload,
        loading: false,
      };
    case GET_MEMBERS:
      return {
        ...state,
        members: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default member;
