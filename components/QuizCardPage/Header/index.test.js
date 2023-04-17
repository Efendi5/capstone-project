import { render, screen } from "@testing-library/react";
import Header from ".";

test("renders header component without crashing", async () => {
  render(<Header points1={0} points2={0} nickname="test" />);
  const header = screen.getByText(/Battle Quiz/i);
  expect(header).toBeInTheDocument();
});
