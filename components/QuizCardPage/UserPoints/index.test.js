import { render, screen } from "@testing-library/react";
import { StyledPoints } from ".";

describe("StyledPoints1 Component", () => {
  test("should render the correct number of points", () => {
    const points = 42;
    render(<StyledPoints>{points} Points</StyledPoints>);
    const points1Element = screen.getByText(`${points} Points`);
    expect(points1Element).toBeInTheDocument();
  });
});
