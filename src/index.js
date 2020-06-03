/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */

/* @jsx createElement */
const { log } = console;

function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });

  children.forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild(document.createTextNode(child));
  });

  return element;
}

function clickHandler() {
  log('hello');
}

const element = (
  <div id="main-div">
    <div>hello</div>
    <button type="button" onClick={clickHandler}>Click Me</button>
  </div>
);

document.getElementById('app').appendChild(element);
