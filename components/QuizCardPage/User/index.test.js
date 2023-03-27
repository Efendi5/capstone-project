import { render, screen } from "@testing-library/react";
import { StyledUser1 } from ".";
import { StyledUser2 } from ".";

describe("StyledUser components", () => {
  it("should render the correct text", () => {
    render(<StyledUser1>😄</StyledUser1>);
    render(<StyledUser2>😎</StyledUser2>);
    const user1Element = screen.getByText("😄");
    const user2Element = screen.getByText("😎");
    expect(user1Element).toBeInTheDocument();
    expect(user2Element).toBeInTheDocument();
  });
});
