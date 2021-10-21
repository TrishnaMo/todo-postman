import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Todo from "../index";

describe("Todo", () => {
  it("should show the passed Todo and a button", () => {
    //Given
    const todo = {
      id: 1,
      title: "Do Exercise",
    };
    const onSubmitcallback = jest.fn();

    //When
    render(<Todo todo={todo} onSubmit={onSubmitcallback} />);

    //Then
    expect(screen.getByText("Do Exercise")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "-" })).toBeInTheDocument();
  });

  it("should call the callback function on button click", () => {
    //Given
    const todo = {
      id: 1,
      title: "Do Exercise",
    };
    const onDeletecallback = jest.fn();

    //When
    render(<Todo todo={todo} onDelete={onDeletecallback} />);
    expect(screen.getByText("Do Exercise")).toBeInTheDocument();
    const button = screen.getByRole("button", { name: "-" });

    //Then
    fireEvent.click(button);
    expect(onDeletecallback).toBeCalledWith({
      id: 1,
      title: "Do Exercise",
    });
  });
});
