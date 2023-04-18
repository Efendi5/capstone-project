import { render, screen } from "@testing-library/react";
import User from ".";

test("renders User component", () => {
  render(<User name="John" emoji="😀" points={10} />);
  const userName = screen.getByText("John");
  expect(userName).toBeInTheDocument();
});
