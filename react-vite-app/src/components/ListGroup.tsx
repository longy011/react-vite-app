import { Fragment } from "react/jsx-runtime";
import { MouseEvent } from "react";

function ListGroup() {
  // All arrays have an index that we can access in the .map() method
  let items = ["New York", "San Francisco", `Tokyo`, `London`, `Paris`];
  //   items = [];

  const message = items.length === 0 && <p>No item found</p>;

  // Event handler
  // To handle event logic we should use a separate function within the component
  // by adding : MouseEvent we have used type annotiation, and now we have autocompletion when we get props of event
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    // React Fragment lets you have many html tags in one return statement
    // Fragment can either use <></> or <Fragment></Fragment>
    <>
      <h1>List</h1>
      {message}
      <ul>
        {/* Javascript doesn't have for loops, so we have to use the .map() method */}
        {/* The items.map(...) expression needs to be wrapped in braces*/}
        {/* A key for each item is required so React knows which element is which for dynamic activites */}
        {/* Often when bring items from an API each item will have an id property item.id */}
        {items.map((item, index) => (
          // In react each element has a property called onClick, in this example we use an arrow function
          <li key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
