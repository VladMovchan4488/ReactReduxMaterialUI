import { takeLatest } from "redux-saga/effects";
import { put, call } from "redux-saga/effects";

// Actions
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_API = "GET_PRODUCTS_API";
export const SHOW_TABLE = "SHOW_TABLE";

// Default State
export const initialState = {
  products: [],
  isLoading: [1]
};

// Dispatch
export const getProductsApi = () => ({ type: GET_PRODUCTS_API });
export const getShow = () => ({ type: SHOW_TABLE });

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.data.products
      };
    case SHOW_TABLE:
      return {
        ...state,
        isLoading: [...state.isLoading, 2]
      };
    default:
      return state;
  }
};

// REDUX-SAGA
export function* getProducts() {
  const url = "/products.json";
  try {
    const data = yield call(() => {
      return fetch(url).then(res => res.json());
    });
    yield put({ type: GET_PRODUCTS, data });
  } catch {
    console.error("error");
  }
}

export function* parsing() {
  yield takeLatest(GET_PRODUCTS_API, getProducts);
}

export default reducer;
