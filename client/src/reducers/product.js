import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  EDIT_PRODUCT,
  GET_PRODUCTS,
  PRODUCT_ERROR,
} from '../actions/types';

const initialState = {
  product: null,
  products: [],
  loading: true,
  error: {},
};

export const product = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_PRODUCT:
      return [...state, action.product];
    case REMOVE_PRODUCT:
      return state.filter(({ id }) => id !== action.id);
    case EDIT_PRODUCT:
      return state.map((product) => {
        if (product.id === action.id) {
          return {
            ...product,
            ...action.updates,
          };
        } else {
          return product;
        }
      });
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false,
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null,
      };
    default:
      return state;
  }
};

export default product;
