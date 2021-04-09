import {
  ADD_LICENSEKEYASSIGNMENT,
  DELETE_LICENSEKEYASSIGNMENT,
  EDIT_LICENSEKEYASSIGNMENT,
  GET_LICENSEKEYASSIGNMENT,
  GET_LICENSEKEYASSIGNMENTS,
  CLEAR_LICENSEKEYASSIGNMENTS,
} from '../actions/types';

const initialState = {
  licenseKeyAssignment: null,
  licenseKeyAssignments: [],
  loading: true,
};

export const licenseKeyAssignmentReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_LICENSEKEYASSIGNMENT:
      return {
        ...state,
        licenseKeyAssignments: state.licenseKeyAssignments.map((member) => {
          if (member.id === payload.memberId) {
            member.licenseKeyAssignments.push({ ...payload });
            return member;
          } else {
            return member;
          }
        }),
        loading: false,
      };
    case DELETE_LICENSEKEYASSIGNMENT:
      return {
        ...state,
        licenseKeyAssignments: state.licenseKeyAssignments.map((member) => {
          if (member.id === payload.memberId) {
            member.licenseKeyAssignments = member.licenseKeyAssignments.filter(
              (licenseKeyAssignment) =>
                licenseKeyAssignment.id !== payload.licenseKeyAssignmentsId
            );
            return member;
          } else {
            return member;
          }
        }),
        loading: false,
      };
    case EDIT_LICENSEKEYASSIGNMENT:
      return {
        ...state,
        licenseKeyAssignments: state.licenseKeyAssignments.map((member) => {
          if (member.id === payload.memberId) {
            member.licenseKeyAssignments.map((licenseKeyAssignment) =>
              licenseKeyAssignment.id === payload.id
                ? { ...payload }
                : licenseKeyAssignment
            );
            return member;
          } else {
            return member;
          }
        }),
        loading: false,
      };
    case GET_LICENSEKEYASSIGNMENT:
      return {
        ...state,
        licenseKeyAssignment: payload,
        loading: false,
      };
    case GET_LICENSEKEYASSIGNMENTS:
      return {
        ...state,
        licenseKeyAssignments: payload,
        loading: false,
      };
    case CLEAR_LICENSEKEYASSIGNMENTS:
      return {
        ...state,
        licenseKeyAssignment: null,
        licenseKeyAssignments: [],
        loading: false,
      };
    default:
      return state;
  }
};

export default licenseKeyAssignmentReducer;
