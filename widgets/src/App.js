import React, { useState } from "react";
// import Accordion from "./components/Accordion";
// import SearchList from "./components/SearchList";
import Dropdown from "./components/Dropdown";

// const items = [
//   {
//     title: "What is React",
//     content: "React is a front end javascript framework",
//   },
//   {
//     title: "Why use React",
//     content: "React is a favourite JS library among engineers",
//   },
//   {
//     title: "How do you use React",
//     content: "You use React by creating components",
//   },
// ];

const options = [
  {
    label: "The Colour of Red",
    value: "Red",
  },
  {
    label: "The Colour of Green",
    value: "Green",
  },
  {
    label: "A Shade of Blue",
    value: "Blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <br />
      <Dropdown
        onSelectedChange={setSelected}
        selected={selected}
        options={options}
      />
    </div>
  );
};
