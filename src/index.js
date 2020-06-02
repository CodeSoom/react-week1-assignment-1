/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagName, props = {}, ...children) {
  const element = document.createElement(tagName);
  Object.entries(props || {}).forEach(([key, value]) => {
    element[key] = value;
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


function render() {
  const element = (
    <p>
      <h1>Hello world</h1>
    </p>
  );

  document.querySelector('#app').textContent = '';
  document.querySelector('#app').appendChild(element);
}

render();
