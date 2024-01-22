const matchers = require("jest-extended");
const testMatchers = require("@testing-library/jest-dom");
expect.extend(matchers);
expect.extend(testMatchers);

afterEach(() => {
  jest.useRealTimers();
});
