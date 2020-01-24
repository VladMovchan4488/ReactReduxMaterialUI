// Library
import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
// Components
import Products from "../products/productList";
// import { getProductsApi } from "../../redux/ducks/Products";
// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import {
  GlobalStyle,
  ContainerMain,
  H3,
  Head,
  Containers,
  Column
} from "../../styles/styles";

class App extends React.Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Head>
          <H3> Table By Products </H3>
        </Head>
        <ContainerMain>
          <Row>
            <Column lg={12}>
              <Containers>
                <Products />
              </Containers>
            </Column>
          </Row>
        </ContainerMain>
      </Router>
    );
  }
}

export default App;
