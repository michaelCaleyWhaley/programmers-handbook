import React from "react";
import { shallow } from "enzyme";
import PageTitle from "./components/PageTitle/PageTitle";

import App from "./App";
import { it } from "@jest/globals";

describe("Enzyme", () => {
  it("should expose internal React state", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state("count")).toBe(1);
  });

  it("should give you access to internal methods", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.instance().internalReactMethod()).toBe("I am internal");
  });

  it('should only render one level deep with "shallow"', () => {
    const wrapper = shallow(<App />);
    // Logs shows rendered dom structure without child components
    // console.log(wrapper.debug({ ignoreProps: true }));
    expect(wrapper.find(PageTitle).exists()).toBe(true);
  });
});
