import React from "react";
import Hello from "../components/Hellow";
import { render, fireEvent } from "@testing-library/react";

test.skip("Comp should be display Hello text", () => {
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

test.skip("Comp btn click", () => {
  const { getByRole } = render(<Hello />);
  let myBtn = getByRole("button");
  fireEvent.click(myBtn);
});

test.skip("Comp input change", () => {
  const { getByRole } = render(<Hello />);
  let myName = "yellow";
  let myInput = getByRole("textbox");
  expect(myInput).toHaveValue("");

  fireEvent.change(myInput, { target: { value: myName } });
  expect(myInput).toHaveValue(myName);
});
