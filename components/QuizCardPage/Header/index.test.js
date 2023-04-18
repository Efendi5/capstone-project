import { render, screen } from "@testing-library/react";
import Header from ".";

test("renders header component", () => {
  render(<Header nickname="John" points="3" />);
  const header = screen.getByText(/Battle Quiz/i);
  const userName = screen.getByText("John");
  const pointsElements = screen.getAllByTestId("user points");
  expect(header).toBeInTheDocument();
  expect(userName).toBeInTheDocument();
  expect(pointsElements).toHaveLength(2);
});
