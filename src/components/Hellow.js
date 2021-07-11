import React, { useState } from "react";

export default function Hello() {
  const [name, setName] = useState("");

  const BtnClickEvent = () => {
    console.log("i'm click");
  };

  return (
    <div>
      <h1 data-testid="my-heading">Hello</h1>
      <button onClick={BtnClickEvent}>click</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
