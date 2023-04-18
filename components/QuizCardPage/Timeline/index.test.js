import { render, screen } from "@testing-library/react";
import Timeline from ".";

test("renders Timeline component", () => {
  render(<Timeline timeLeft={30} />);

  const timerElement = screen.getByText(/30s/i);
  expect(timerElement).toBeInTheDocument();
});
