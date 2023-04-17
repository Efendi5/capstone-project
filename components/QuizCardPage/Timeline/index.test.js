import { render, screen } from "@testing-library/react";
import Timeline from ".";

test("renders Timeline component without crashing", () => {
  render(
    <Timeline
      isTimerPaused={false}
      setIsDisabled={() => {}}
      timeLeft={30}
      setTimeLeft={() => {}}
    />
  );

  const timerElement = screen.getByText(/30s/i);
  expect(timerElement).toBeInTheDocument();
});
