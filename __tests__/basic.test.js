const { run } = require("../src/runner");

const { expect } = require("chai");

describe("Runner Test", () => {
  it("Should return the double", done => {
    const steps = 10;

    const output = run(steps);
    const expected = steps * 3;

    expect(output).to.equal(expected);
    done();
  });
});
