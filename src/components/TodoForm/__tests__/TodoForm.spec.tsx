import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import TodoForm from "../index";

describe("TodoForm", () => {
  it("should show a textInput and a disabled button", () => {
    //Given and When
    render(<TodoForm onAdd={jest.fn()} />);

    //Then
    expect(screen.getByPlaceholderText("Enter your Todos")).toBeInTheDocument;
    const button = screen.getByRole("button", { name: "+" });
    expect(button).toBeDisabled();
  });

  it("should enable the button once the todo is entered", () => {
    //Given and When
    render(<TodoForm onAdd={jest.fn()} />);
    const todoTitle = screen.getByPlaceholderText(
      "Enter your Todos"
    ) as HTMLInputElement;
    const addingButton = screen.getByRole("button", { name: "+" });
    expect(addingButton).toBeDisabled();

    //Then
    fireEvent.change(todoTitle, { target: { value: "Do Exercise" } });
    expect(addingButton).toBeEnabled();
  });

  it("should disable the button if text is entered and then cleared", () => {
    //Given and When
    render(<TodoForm onAdd={jest.fn()} />);
    const todoTitle = screen.getByPlaceholderText(
      "Enter your Todos"
    ) as HTMLInputElement;
    const addButton = screen.getByRole("button", { name: "+" });
    expect(addButton).toBeDisabled();

    //Then
    fireEvent.change(todoTitle, { target: { value: "Do Exercise" } });
    expect(addButton).toBeEnabled();
    fireEvent.change(todoTitle, { target: { value: "" } });
    expect(addButton).toBeDisabled();
  });
  it("should call the callback function on button click", () => {
    //Given
    const onSubmitCallback = jest.fn();

    //When
    render(<TodoForm onAdd={onSubmitCallback} />);
    const todoTitle = screen.getByPlaceholderText("Enter your Todos");
    const addingButton = screen.getByRole("button", { name: "+" });

    //Then
    fireEvent.change(todoTitle, { target: { value: "Do Exercise" } });
    fireEvent.click(addingButton);
    expect(onSubmitCallback).toBeCalledWith({
      title: "Do Exercise",
    });
  });

  it("should clear the textinput on button click and disable the button", () => {
    //Given
    const onSubmitCallback = jest.fn();

    //When
    render(<TodoForm onAdd={onSubmitCallback} />);
    const todoTextInput = screen.getByPlaceholderText("Enter your Todos") as HTMLInputElement;
    const addButton = screen.getByRole("button", { name: "+" });

    //Then
    fireEvent.change(todoTextInput, { target: { value: "Do Exercise" } });
    expect(todoTextInput.value).toBe("Do Exercise");
    fireEvent.click(addButton);
    expect(onSubmitCallback).toBeCalledWith({
      title: "Do Exercise",
    });
    expect(todoTextInput.value).toBe("");
    expect(addButton).toBeDisabled();
  });
});
