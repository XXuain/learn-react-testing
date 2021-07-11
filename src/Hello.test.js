import React from "react";
import Hello from "./Hello";
import { render, fireEvent } from "@testing-library/react";

test("Comp should be display Hello text", () => {
  const { getByText, getByTestId, debug } = render(<Hello />);
  // comp.debug();

  debug();
  const helloText = getByText("Hello");
  expect(helloText).toBeTruthy();

  const helloTextId = getByTestId("my-heading");
  console.log("helloTextId > ", helloTextId.textContent);

  // getBy getAllBy
  // queryBy queryAllBy
  // findBy findAllBy - asynchronously

  // console.log(helloText.tagName);
  expect(helloText.tagName).toBe("H1");

  // console.log(helloText.textContent);
});

test.only("Comp btn click", () => {
  const { getByRole } = render(<Hello />);
  let myBtn = getByRole("button");

  fireEvent.click(myBtn);
});
