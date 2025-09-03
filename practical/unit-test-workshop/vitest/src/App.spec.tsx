import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

for (let i = 0; i < 2000; i++) {
  test("adds 1 + 2 to equal 3", () => {
    const {unmount} = render(<App />);
    const ele = screen.getByText(
      "Click on the Vite and React logos to learn more"
    );
    expect(ele).toBeInTheDocument();
    unmount();
    const ele1 = screen.queryByText(
      "Click on the Vite and React logos to learn more"
    );
    expect(ele1).not.toBeInTheDocument();
  });
}
