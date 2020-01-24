import React from "react";
import Products from "../productList";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

it("Snaphot List", () => {
  const props = {
    products: [
      {
        bsr_category: "Home & Kitchen",
        price: 15.79,
        stars: 4.6,
        name: "A3 Magnetic Dry Wipe Weekly Planner Whiteboard for Fridge"
      }
    ],
    isLoading: [1]
  };

  const wrapper = shallow(<Products.WrappedComponent {...props} />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
