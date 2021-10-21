import { fireEvent, render, screen, within } from "@testing-library/react";
import React from "react";
import HomeScreen from "../index";

describe("HomeScreen", () => {
  it("should add the entered todo to the todoList on button click", async () => {
    //Given and When
    render(<HomeScreen />);

    //Then
    const todoTitle = screen.getByPlaceholderText("Enter your Todos");
    const button = screen.getByRole("button", { name: "+" });
    fireEvent.change(todoTitle, { target: { value: "Do Exercise" } });
    fireEvent.click(button);
    const firstTodo = await screen.findByTestId("1");
    expect(within(firstTodo).getByText("Do Exercise")).toBeInTheDocument();

    fireEvent.change(todoTitle, { target: { value: "Buy Veggies" } });
    fireEvent.click(button);

    const secondTodo = screen.getByTestId("2");
    expect(within(secondTodo).getByText("Buy Veggies")).toBeInTheDocument();
  });

  it("should delete the paticular todo from the list on button click", () => {
    //Given and When
    render(<HomeScreen />);
    const todoInput = screen.getByPlaceholderText("Enter your Todos");
    const addTodoButton = screen.getByRole("button", { name: "+" });

    fireEvent.change(todoInput, { target: { value: "Do Exercise" } });
    fireEvent.click(addTodoButton);

    fireEvent.change(todoInput, { target: { value: "Do office work" } });
    fireEvent.click(addTodoButton);

    fireEvent.change(todoInput, { target: { value: "Buy Veggies" } });
    fireEvent.click(addTodoButton);

    const firstTodo = screen.getByTestId("1");
    const title1 = within(firstTodo).getByText("Do Exercise");
    const deleteButton1 = within(firstTodo).getByRole("button", { name: "-" });

    const secondTodo = screen.getByTestId("2");
    const title2 = within(secondTodo).getByText("Do office work");
    const deleteButton2 = within(secondTodo).getByRole("button", { name: "-" });

    const thirdTodo = screen.getByTestId("3");
    const title3 = within(thirdTodo).getByText("Buy Veggies");
    const deleteButton3 = within(thirdTodo).getByRole("button", { name: "-" });

    //Then
    fireEvent.click(deleteButton1);
    expect(title1).not.toBeInTheDocument();

    fireEvent.click(deleteButton2);
    expect(title2).not.toBeInTheDocument();

    fireEvent.click(deleteButton3);
    expect(title3).not.toBeInTheDocument();
  });
});
