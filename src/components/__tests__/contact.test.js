import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Contact component should be loaded", () => {
    render(<Contact/>);

    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    ;
})