import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import Home from "../Home";
import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event";
import data from "../../../../data.json";
import ReactDatePicker from "react-datepicker";

test("Home renders correctly", async () => {
  const expectedData = data[0];
  render(<Home />);
  render(<ReactDatePicker />);
  await waitFor(
    () => {
      const image = screen.getByRole("img");

      expect(image).toHaveAttribute("src");
    },
    { timeout: 1000 }
  );
  const title = screen.getByTestId("title");
  const date = screen.getByTestId("date");
  const explanation = screen.getByTestId("explanation");
  const copyright = screen.getByTestId("copyright");

  expect(title.textContent).toMatch(expectedData.title);
  expect(date.textContent).toMatch(expectedData.date);
  expect(explanation.textContent).toMatch(expectedData.explanation);
  expect(copyright.textContent).toMatch(expectedData.copyright);
});
