import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Contact component should be loaded", () => {
    render(<Contact/>);

    const heading = screen.getByRole('heading');

    const button = screen.getAllByText("Submit");
    expect(heading).toBeInTheDocument();
})

test("Contact component should be have submit button", () => {
    render(<Contact/>);

    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
})