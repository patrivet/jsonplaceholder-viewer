import React from "react";
import { shallow } from "enzyme";
import Stats from "./Stats";

describe("Stats", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Stats />);
    expect(wrapper).toMatchSnapshot();
  });
});
