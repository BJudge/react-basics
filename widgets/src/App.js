import React, { useState } from "react";
import Accordion from "./components/Accordion";
import SearchList from "./components/SearchList";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Headers";

const items = [
  {
    title: "What is React",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React",
    content: "React is a favourite JS library among engineers",
  },
  {
    title: "How do you use React",
    content: "You use React by creating components",
  },
];

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
const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header></Header>
      <Route path="/">
        <Accordion items={items}></Accordion>
      </Route>
      <Route path="/list">
        <SearchList></SearchList>
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="selec a colour"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        ></Dropdown>
      </Route>
      <Route path="/translate">
        <Translate></Translate>
      </Route>
    </div>
  );
};

export default App;
