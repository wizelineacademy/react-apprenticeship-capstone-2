import { render, screen } from "@testing-library/react";
import React from "react";
import Home from "../Home";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

test("Display the Home component", () => {
  render(<Home />);
});
