import reducer, { initialState } from "../Products";
import { put, takeLatest } from "redux-saga/effects";
import { getProducts, parsing } from "../Products";
import { GET_PRODUCTS, SHOW_TABLE, GET_PRODUCTS_API } from "../Products";
import { getProductsApi, getShow } from "../Products";
window.alert = jest.fn();

// Reducer
describe("My reducer", () => {
  // BLOCK 1
  it("SHOW_TABLE", () => {
    const action = {
      type: SHOW_TABLE,
      isLoading: [1, 2]
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: [1, 2]
    });
  });

  // BLOCK 2
  it("GET_PRODUCTS", () => {
    const action = {
      type: GET_PRODUCTS,
      data: {
        products: [
          {
            name: "A3 Magnetic",
            img:
              "https://images-na.ssl-images-amazon.com/images/I/71Y4Ogr8BNL._SX679_.jpg",
            bsr_category: "Home & Kitchen",
            price: 15.79
          }
        ]
      }
    };
    expect(reducer(initialState, action)).toStrictEqual({
      ...initialState,
      products: [
        {
          name: action.data.products[0].name,
          img: action.data.products[0].img,
          bsr_category: action.data.products[0].bsr_category,
          price: action.data.products[0].price
        }
      ]
    });
  });
});

// Actions
describe("My actions", () => {
  it("getShow", () => {
    expect(getShow()).toEqual({ type: "SHOW_TABLE" });
  });

  it("getProductsApi", () => {
    expect(getProductsApi()).toEqual({ type: "GET_PRODUCTS_API" });
  });
});

// Saga
global.axios = require("jest-fetch-mock");
describe("SAGA TEST", () => {
  global.fetch = require("jest-fetch-mock");

  it('Test1" ', () => {
    const generator = parsing();
    expect(generator.next().value).toEqual(
      takeLatest("GET_PRODUCTS_API", getProducts)
    );
    expect(generator.next().done).toBeTruthy();
  });

  it("Test2", () => {
    const mockResponse = { Products: "test" };
    const generator = getProducts();
    expect(generator.next().value.type).toEqual("CALL");
    expect(generator.next(mockResponse).value).toEqual(
      put({ type: "GET_PRODUCTS", data: { Products: "test" } })
    );
    expect(generator.next().done).toBeTruthy();
  });
});
