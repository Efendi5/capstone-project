import { render, screen } from "@testing-library/react";
import { StyledHeader } from ".";

describe("StyledHeader component", () => {
  it("should render the correct text", () => {
    render(<StyledHeader>Battle Quiz</StyledHeader>);
    const headerElement = screen.getByText(/Battle Quiz/i);
    expect(headerElement).toBeInTheDocument();
  });
});
