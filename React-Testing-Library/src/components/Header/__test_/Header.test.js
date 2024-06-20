import { render, screen } from "@testing-library/react";
import Header from "../Header";

//GET BY
it("should render some text passed into title prop", async () => {
  render(<Header title="My header" />);
  const headingElement = screen.getByText(/My header/i);
  expect(headingElement).toBeInTheDocument();
});

// it("should render some blablabla", async () => {
//   render(<Header title="My header" />);
//   const headingElement = screen.getByRole("heading");
//   expect(headingElement).toBeInTheDocument();
// });

it("should render some blablabla", async () => {
  render(<Header title="My header" />);
  const headingElement = screen.getByRole("heading", { name: "My header" });
  expect(headingElement).toBeInTheDocument();
});

it("should render some blablabla", async () => {
  render(<Header title="My header" />);
  const headingElement = screen.getByTitle("Header");
  expect(headingElement).toBeInTheDocument();
});

it("should render some blablabla", async () => {
  render(<Header title="My header" />);
  const headingElement = screen.getByTestId("header-1");
  expect(headingElement).toBeInTheDocument();
});

//FIND BY
it("should render same text passed into title prop", () => {
  render(<Header></Header>);
});
