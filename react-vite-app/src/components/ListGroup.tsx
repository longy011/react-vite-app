import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  let items = ["New York", "San Francisco", `Tokyo`, `London`, `Paris`];
  items = [];

  const message = items.length === 0 && <p>No item found</p>;

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
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
