const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // CODE HERE
  it("return an array", () => {
    const result = shuffle([]);
    expect(Array.isArray(result)).toBe(true);
  });
  it("return an array with the same length as the input", () => {
    const result = shuffle([1, 2, 3]);
    expect(result.length).toBe(3);
  });
});
