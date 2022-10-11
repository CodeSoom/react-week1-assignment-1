/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */
import { useState } from 'react';

const [count, setCount] = useState(0);
function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLocaleLowerCase()] = value;
  });
  children.flat().forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild(document.createTextNode(child));
  });

  return element;
}

function handleClick() {
  const counter = count++;
  setCount(counter);
  render();
}

function handleClickNumber(value) {
  count = value;
  render();
}
function render() {
  const element = (
    <div id="hello" className="greeting">
      <p>Hello, World!</p>
      <p>
        <button type="button" onClick={handleClick}>
          Click Me!(
          {count})
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => handleClickNumber(i)}>
            {i}
          </button>
        ))}
      </p>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render();
