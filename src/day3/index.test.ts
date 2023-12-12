import { getValue } from "./index";

describe("getValue", () => {
  it("works", () => {
    const result = getValue("a");
    expect(result).toBe(3);
  });
});
