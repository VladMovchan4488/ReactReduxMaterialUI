import React from "react";
import Product from "../product";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

it("Snapshot my Product", () => {
  const params = {
    bsr_category: "Home & Kitchen",
    price: 15.79,
    stars: 4.6,
    name: "A3 Magnetic Dry Wipe Weekly Planner Whiteboard for Fridge"
  };

  const wrapper = shallow(<Product {...params} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
