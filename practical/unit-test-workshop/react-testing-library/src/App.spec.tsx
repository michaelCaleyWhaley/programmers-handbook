import { expect, test } from "vitest";
import { prettyDOM, render } from "@testing-library/react";
import App from "./App.tsx";

test("Test that count has been rendered", () => {
  const { getByText } = render(<App />);
  expect(getByText("1")).toBeInTheDocument();
});

test("Test that shows no internal methods are exposed", () => {
  const app = render(<App />);
  // @ts-expect-ignore Ignore TypeScript error for testing purposes
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  expect(app.internalMethodToTest).toBeUndefined();
});

test("Test that shows whole dom tree", () => {
  const app = render(<App />);
  console.log("mc prettyDOM():", prettyDOM());
  expect(app).toBeDefined();
});
