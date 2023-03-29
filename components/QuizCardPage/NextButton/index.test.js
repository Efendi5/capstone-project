import { StyledButtonNext } from ".";
import { render, fireEvent, screen } from "@testing-library/react";

describe("StyledButtonNext component", () => {
  it("should call onClick to move to the next page", () => {
    const onClick = jest.fn();
    const moveNextPage = "Next";

    render(
      <StyledButtonNext onClick={onClick}>{moveNextPage}</StyledButtonNext>
    );

    fireEvent.click(screen.getByText("Next"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
