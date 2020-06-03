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

function countUp(count) {
  return count + 1;
}

(function render(count = 0) {
  const root = () => createElement('div', null, (
    <div id="wrapper" className="greeting hello">
      <p className="description">Hello, world!</p>
      <button type="button" onClick={() => render(countUp(count))}>
        Click me! (
        {count}
        )
      </button>
      <div>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => render(i)}>
            {i}
          </button>
        ))}
      </div>
    </div>));
  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(root(0));
}());
