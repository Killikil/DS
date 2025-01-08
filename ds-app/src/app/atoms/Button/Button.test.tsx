// src/components/atoms/Button.test.tsx
import React from "react"; // Explicitly import React
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders a button", () => {
  render(<Button label="Click Me" />);
  expect(screen.getByText("Click Me")).toBeInTheDocument();
});
test("button triggers onClick event", () => {
  const handleClick = jest.fn();
  render(<Button label="Click Me" onClick={handleClick} />);
  fireEvent.click(screen.getByText("Click Me"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
