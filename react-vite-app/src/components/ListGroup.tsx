import { Fragment } from "react/jsx-runtime";
import "./ListGroup.css";
import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
}

// Each component instance has its own state
// We can destruct our props in the function defintion
function ListGroup({ items, heading }: ListGroupProps) {
  // Hook (this is the state hook, hooks let us tap into Reacts features)
  const [selectedIndex, setSelectedIndex] = useState(-1); // Using (variable, method) is convention here

  const message = items.length === 0 && <p>No item found</p>;

  // Event handler

  return (
    // React Fragment lets you have many html tags in one return statement
    // Fragment can either use <></> or <Fragment></Fragment>
    <>
      <h1>{heading}</h1>
      {message}
      <ul>
        {/* Javascript doesn't have for loops, so we have to use the .map() method */}
        {/* The items.map(...) expression needs to be wrapped in braces*/}
        {/* A key for each item is required so React knows which element is which for dynamic activites */}
        {/* Often when bring items from an API each item will have an id property item.id */}
        {items.map((item, index) => (
          // In react each element has a property called onClick, in this example we use an arrow function
          <li
            className={selectedIndex === index ? "active" : "list-item"}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
