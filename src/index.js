/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

const createElement = (tagName, props, ...children) => {
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
};

function handleClick(value) {
  value += 1;
  render(value);
}
function handleClickNumber(value) {
  render(value);
}
function render(count = 0) {
  const element = (
    <div id="wrapper" className="greeting hello">
      123123
      <p className="description">Hello, world!</p>
      <button type="button" onClick={() => handleClick(count)}>
        Click me! ({count})
      </button>
      <div>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => handleClickNumber(i)}>
            {i}
          </button>
        ))}
      </div>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render();
