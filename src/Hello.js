import React from "react";

export default function Hello() {
  const BtnClickEvent = () => {
    console.log("i'm click");
  };

  return (
    <div>
      <h1 data-testid="my-heading">Hello</h1>
      <button onClick={BtnClickEvent}>click</button>
    </div>
  );
}
