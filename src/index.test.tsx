import { render } from "@testing-library/react";
import Hello from "./index.js";
import React from "react";
describe("Experiment", () => {
  it("renders the proper task", () => {
    render(<Hello />);
  });
});
