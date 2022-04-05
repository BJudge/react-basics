import React, { useState, useEffect } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.addEventListener(
      "click",
      () => {
        console.log("Body Click");
        setOpen(false);
      },
      { capture: true }
    );
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        onClick={() => {
          console.log("Item clicked");
          onSelectedChange(option);
        }}
        className="item"
      >
        {option.label}
      </div>
    );
  });
  return (
    <div className="ui form container">
      <div className="field ">
        <label className="label">Select a Colour</label>
        <div
          onClick={() => {
            console.log("Dropdown Clicked");
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? `visible active` : ""}`}
        >
          <i className="dropdoown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? `visible transition` : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
