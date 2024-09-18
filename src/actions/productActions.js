export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    dispatch({ type: FETCH_PRODUCTS, payload: data });
  };
};

export const setCategoryFilter = (category) => {
  return {
    type: SET_CATEGORY_FILTER,
    payload: category,
  };
};
