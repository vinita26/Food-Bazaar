import { render, screen } from "@testing-library/react";
import Contact from "../Contact.tsx";
import "@testing-library/jest-dom";
import React from "react";

describe("Contact Us Page Test Case", () => {

  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside Contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside Contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 input boxes on the Contact component", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
  });
});