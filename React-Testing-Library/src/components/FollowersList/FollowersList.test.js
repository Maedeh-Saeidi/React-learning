import { screen, render } from "@testing-library/react";
import FollowersList from "./FollowersList";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowersList", () => {
  test("should render follower items", async () => {
    render(<MockFollowersList />);
    const FollowerDivElement = await screen.findByTestId("follower-item-0");
    expect(FollowerDivElement).toBeInTheDocument();
  });

  test("should render multiple follower items", async () => {
    render(<MockFollowersList />);
    const FollowerDivElements = await screen.findAllByTestId(/follower-item/i);
    expect(FollowerDivElements.length).toBe(5);
  });
});
