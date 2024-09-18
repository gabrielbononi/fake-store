import { FETCH_PRODUCTS, SET_CATEGORY_FILTER } from '../actions/productActions';

const initialState = {
  products: [],
  filteredProducts: [],
  categoryFilter: 'all',
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      };
    case SET_CATEGORY_FILTER:
      const filtered =
        action.payload === 'all'
          ? state.products
          : state.products.filter((product) => product.category === action.payload);
      return {
        ...state,
        categoryFilter: action.payload,
        filteredProducts: filtered,
      };
    default:
      return state;
  }
};

export default productReducer;
