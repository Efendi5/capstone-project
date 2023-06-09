import { render, screen } from "@testing-library/react";
import NextButton from ".";

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

test("renders NextButton component", async () => {
  render(
    <NextButton
      isDisabled={true}
      index={0}
      setIsDisabled={() => {}}
      setIsTimerPaused={() => {}}
      setTimeLeft={() => {}}
      setIndex={() => {}}
      setSelectedAnswer={() => {}}
      setClickCounter={() => {}}
      clickCounter={0}
      points1={0}
      currentQuestion={{}}
    />
  );
  const nextButton = screen.queryByRole("button", { name: /weiter/i });
  expect(nextButton).toBeInTheDocument();
});
