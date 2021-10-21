import React from "react";
import TodoList from "../index";
import { fireEvent, render, screen, within } from "@testing-library/react";

describe("TodoList", () => {
  it("should show the list of Todos with a button for each todo", () => {
    //Given
    const todoList = [
      {
        id: 1,
        title: "Do Exercises",
      },
      {
        id: 2,
        title: "Do office work",
      },
      {
        id: 3,
        title: "Buy Veggies",
      },
    ];

    //When
    render(<TodoList todoList={todoList} onDelete={() => {}} />);

    //Then
    const firstTodo = screen.getByTestId("1");
    expect(within(firstTodo).getByText("Do Exercises")).toBeInTheDocument();
    expect(
      within(firstTodo).getByRole("button", { name: "-" })
    ).toBeInTheDocument();

    const secondTodo = screen.getByTestId("2");
    expect(within(secondTodo).getByText("Do office work")).toBeInTheDocument();
    expect(
      within(secondTodo).getByRole("button", { name: "-" })
    ).toBeInTheDocument();

    const thirdTodo = screen.getByTestId("3");
    expect(within(thirdTodo).getByText("Buy Veggies")).toBeInTheDocument();
    expect(
      within(thirdTodo).getByRole("button", { name: "-" })
    ).toBeInTheDocument();
  });

  it("should call the deleHandler on button click", () => {
    //Given
    const todoList = [
      {
        id: 1,
        title: "Do Exercises",
      },
    ];
    const onDelete = jest.fn();

    //When
    render(<TodoList todoList={todoList} onDelete={onDelete} />);
    const firstTodo = screen.getByTestId("1");
    const button1 = within(firstTodo).getByRole("button", { name: "-" });

    //Then
    fireEvent.click(button1);
    expect(onDelete).toBeCalledWith({
      id: 1,
      title: "Do Exercises",
    });
  });
});
