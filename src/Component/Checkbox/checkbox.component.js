import React from "react";

function Checkbox({ option }) {
  return (
    <>
      <input
        key={option.id}
        type="checkbox"
        value={option.text}
        className="checkbox"
      />
      {option.text} <br />
    </>
  );
}

export default Checkbox;
