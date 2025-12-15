// PascalCasing (first letter capitalised) react follows this
function Message() {
  // JSX: This is will be compiled into javascript code by Babel
  // This website shows how JSX code becomes javascript code https://babeljs.io/
  const name = 'Edward';
  if (name) {
    return <h1>Hello, {name}!</h1>;
  } else { // Else statement not needed because the return value will exist anyway before
    return <h1>Hello, World!</h1>
  }
}

export default Message; 