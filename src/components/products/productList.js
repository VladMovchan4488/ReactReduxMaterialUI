// Library
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
// Styles
import "bootstrap/dist/css/bootstrap.min.css";
// MATERIAL UL
import { getProductsApi } from "../../redux/ducks/Products";
import Product from "../product/product";
import { getShow } from "../../redux/ducks/Products";

const Products = ({ products, getAPIproducts, getShowTable, isLoading }) => {
  useEffect(() => {
    getAPIproducts();
  }, [0]);

  return (
    <div className="render">
      {isLoading.map((e, i) => (
        <Product products={products} key={i} />
      ))}
      <button
        type="button"
        className="btn btn-secondary addAction"
        onClick={() => getShowTable()}
      >
        Добавить ещё одну таблицу
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.productList.products,
  isLoading: state.productList.isLoading
});

const mapDispatchToProps = dispatch => ({
  getAPIproducts: () => dispatch(getProductsApi()),
  getShowTable() {
    dispatch(getShow());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
