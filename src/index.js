/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagName, props = {}, ...children) {
  const element = document.createElement(tagName);
  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
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


function render({ count = 0 }) {
  const element = (
    <p>
      <h1>Hello world!</h1>
      <p>
        <button type="button" onClick={() => render({ count: count + 1 })}>
          Click me!
          (
          {count}
          )
        </button>
        <p>
          {[1, 2, 3].map((i) => <button type="button" onClick={() => render({ count: i })}>{i}</button>)}
        </p>
      </p>
    </p>
  );

  document.querySelector('#app').textContent = '';
  document.querySelector('#app').appendChild(element);
}

render({ count: 0 });
