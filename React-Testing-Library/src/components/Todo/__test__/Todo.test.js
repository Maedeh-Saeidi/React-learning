import { render, screen, fireEvent, getByText } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { toHaveClass } from "@testing-library/jest-dom/dist/matchers";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, {
      target: { value: task },
    });
    fireEvent.click(buttonElement);
  });
};

describe("Todo", () => {
  it("should render same text passed into title prop", async () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });
    fireEvent.click(buttonElement);
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    expect(divElement).toBeInTheDocument();
  });

  it("should render multiple elements", async () => {
    render(<MockTodo />);
    addTask(["GO Grocery Shopping", "Pet my cat", "Wash my hands"]);
    const divElement = screen.getAllByTestId("task-container");
    expect(divElement.length).toBe(3);
  });

  it("task should not have completed class when initally rendered", async () => {
    render(<MockTodo />);
    addTask(["Eat Dinner"]);
    const divElement = screen.getByText(/Eat Dinner/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("should have completed class when clicked", async () => {
    render(<MockTodo />);
    addTask(["Wash the dishes"]);
    const divElement = screen.getByText(/Wash the dishes/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
