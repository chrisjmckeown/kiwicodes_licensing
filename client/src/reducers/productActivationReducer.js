import {
  ADD_PRODUCTACTIVATION,
  DELETE_PRODUCTACTIVATION,
  EDIT_PRODUCTACTIVATION,
  GET_PRODUCTACTIVATION,
  GET_PRODUCTACTIVATIONS,
  CLEAR_PRODUCTACTIVATIONS,
} from '../actions/types';

const initialState = {
  productActivation: null,
  productActivations: [],
  loading: true,
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
    case CLEAR_PRODUCTACTIVATIONS:
      return {
        ...state,
        productActivation: null,
        productActivations: [],
        loading: false,
      };
    default:
      return state;
  }
};

export default productActivation;
