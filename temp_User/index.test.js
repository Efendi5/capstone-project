import { render, screen } from "@testing-library/react";
import { StyledUser } from ".";

describe("StyledUser components", () => {
  it("should render the correct text", () => {
    render(<StyledUser>😄</StyledUser>);
    const user1Element = screen.getByText("😄");
    expect(user1Element).toBeInTheDocument();
  });
});
