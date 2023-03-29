import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Timeline from ".";
import { act } from "react-dom/test-utils";

jest.useFakeTimers();

describe("Timeline", () => {
  it("displays the correct time left", async () => {
    render(<Timeline />);
    const timerElement = screen.getByText(/s/);
    expect(timerElement).toBeInTheDocument();
    expect(timerElement.textContent).toBe("30s");

    act(() => {
      jest.advanceTimersByTime(5000);
    });
    await waitFor(() => expect(timerElement.textContent).toBe("25s"));

    act(() => {
      jest.advanceTimersByTime(25000);
    });
    await waitFor(() => expect(timerElement.textContent).toBe("0s"));
  });
});
