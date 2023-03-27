import { render, screen } from "@testing-library/react";
import { StyledPoints1 } from ".";

describe("StyledPoints1 Component", () => {
  test("should render the correct number of points", () => {
    const points1 = 42;
    render(<StyledPoints1>{points1} Points</StyledPoints1>);
    const points1Element = screen.getByText(`${points1} Points`);
    expect(points1Element).toBeInTheDocument();
  });
});
