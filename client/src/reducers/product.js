import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  GET_PRODUCT,
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
      return {
        ...state,
        products: [payload, ...state.products],
        loading: false,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== payload),
        loading: false,
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        posts: state.products.map(
          (product) => product._id === payload.id && { ...product, ...payload }
        ),
        loading: false,
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: payload,
        loading: false,
      };
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
