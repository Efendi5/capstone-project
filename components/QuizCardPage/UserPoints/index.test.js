import { render, screen } from "@testing-library/react";
import { StyledPoints } from ".";

test("should render the correct number of points", () => {
  const points = 3;
  render(<StyledPoints>{points} Points</StyledPoints>);
  const points1Element = screen.getByText(`${points} Points`);
  expect(points1Element).toBeInTheDocument();
});
