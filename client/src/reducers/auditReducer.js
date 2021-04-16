import moment from 'moment';
import {
  ADD_AUDIT,
  DELETE_AUDIT,
  EDIT_AUDIT,
  GET_AUDIT,
  GET_AUDITS,
  CLEAR_AUDITS,
  SET_AUDITACTIVATIONS_START_DATE,
  SET_AUDITACTIVATIONS_END_DATE,
  SET_AUDITACTIVATIONS_NAME_FILTER,
  SET_AUDITACTIVATIONS_MEMBER_FILTER,
  SET_AUDITACTIVATIONS_COMPANY_FILTER,
} from '../actions/types';

const initialState = {
  audit: null,
  audits: [],
  loading: true,
  filterStartDate: moment().startOf('month'),
  filterEndDate: moment().endOf('month'),
  filterName: '',
  filterMember: '',
  filterCompany: '',
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
    case SET_AUDITACTIVATIONS_START_DATE:
      return {
        ...state,
        filterStartDate: payload,
      };
    case SET_AUDITACTIVATIONS_END_DATE:
      return {
        ...state,
        filterEndDate: payload,
      };
    case SET_AUDITACTIVATIONS_NAME_FILTER:
      return {
        ...state,
        filterName: payload,
      };
    case SET_AUDITACTIVATIONS_MEMBER_FILTER:
      return {
        ...state,
        filterMember: payload,
      };
    case SET_AUDITACTIVATIONS_COMPANY_FILTER:
      return {
        ...state,
        filterCompany: payload,
      };
    case CLEAR_AUDITS:
      return {
        ...state,
        audit: null,
        audits: [],
        loading: false,
        filterStartDate: moment().startOf('month'),
        filterEndDate: moment().endOf('month'),
        filterName: '',
        filterMember: '',
        filterCompany: '',
      };
    default:
      return state;
  }
};

export default audit;
