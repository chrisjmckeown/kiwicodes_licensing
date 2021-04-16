import moment from 'moment';
import {
  ADD_PRODUCTACTIVATION,
  DELETE_PRODUCTACTIVATION,
  EDIT_PRODUCTACTIVATION,
  GET_PRODUCTACTIVATION,
  GET_PRODUCTACTIVATIONS,
  CLEAR_PRODUCTACTIVATIONS,
  SET_PRODUCTACTIVATIONS_START_DATE,
  SET_PRODUCTACTIVATIONS_END_DATE,
  SET_PRODUCTACTIVATIONS_NAME_FILTER,
  SET_PRODUCTACTIVATIONS_MEMBER_FILTER,
  SET_PRODUCTACTIVATIONS_COMPANY_FILTER,
} from '../actions/types';

const initialState = {
  productActivation: null,
  productActivations: [],
  loading: true,
  filterStartDate: moment().startOf('month'),
  filterEndDate: moment().endOf('month'),
  filterName: '',
  filterMember: '',
  filterCompany: '',
};

export const productActivation = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_PRODUCTACTIVATION:
      return {
        ...state,
        productActivations: [payload, ...state.productActivations],
        loading: false,
      };
    case DELETE_PRODUCTACTIVATION:
      return {
        ...state,
        productActivations: state.productActivations.filter(
          (productActivation) => productActivation.id !== payload
        ),
        loading: false,
      };
    case EDIT_PRODUCTACTIVATION:
      return {
        ...state,
        productActivations: state.productActivations.map((productActivation) =>
          productActivation.id === payload.id
            ? { ...payload }
            : productActivation
        ),
        loading: false,
      };
    case GET_PRODUCTACTIVATION:
      return {
        ...state,
        productActivation: payload,
        loading: false,
      };
    case GET_PRODUCTACTIVATIONS:
      return {
        ...state,
        productActivations: payload,
        loading: false,
      };
    case SET_PRODUCTACTIVATIONS_START_DATE:
      return {
        ...state,
        filterStartDate: payload,
      };
    case SET_PRODUCTACTIVATIONS_END_DATE:
      return {
        ...state,
        filterEndDate: payload,
      };
    case SET_PRODUCTACTIVATIONS_NAME_FILTER:
      return {
        ...state,
        filterName: payload,
      };
    case SET_PRODUCTACTIVATIONS_MEMBER_FILTER:
      return {
        ...state,
        filterMember: payload,
      };
    case SET_PRODUCTACTIVATIONS_COMPANY_FILTER:
      return {
        ...state,
        filterCompany: payload,
      };
    case CLEAR_PRODUCTACTIVATIONS:
      return {
        ...state,
        productActivation: null,
        productActivations: [],
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

export default productActivation;
