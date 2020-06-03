/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* eslint no-unused-vars: 0 */

/* @jsx createElement */
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

function render(count) {
  const element = (
    <div id="main-div">
      <div>{count}</div>
      <button type="button" onClick={() => render(count + 1)}>Click Me</button>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render(0);
