// @ts-nocheck

import { render, act, prettyDOM } from "@testing-library/react";
import App from "./App";

let getByText;

describe("Tab component", () => {
  describe("when btn2 is clicked", () => {
    beforeEach(() => {
      ({ getByText } = render(<App />));

      act(() => {
        getByText("btn2").click();
      });
    });

    it("should display second tab content", () => {
      const secondTabEle = getByText("Second tab");
      console.log("secondTabEle: ", secondTabEle.after);

      expect(secondTabEle.parentElement).toHaveClass("active");

      const thirdTabEle = getByText("Third tab");
      expect(thirdTabEle.parentElement).not.toHaveClass("active");
    });

    it("should display third tab content", () => {
      act(() => {
        getByText("btn3").click();
      });

      const thirdTabEle = getByText("Third tab");
      expect(thirdTabEle.parentElement).toHaveClass("active");

      const secondTabEle = getByText("Second tab");
      expect(secondTabEle.parentElement).not.toHaveClass("active");
    });
  });
});
