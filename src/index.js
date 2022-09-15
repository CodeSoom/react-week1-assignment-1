/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagName, props, ...children) {
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

const DEFAULT_COUNT = 0;
const counter = {
  count: DEFAULT_COUNT,
};

function render({ count }) {
  const root = document.getElementById('app');

  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>
        <button type="button" onClick={() => render({ count: count + 1 })}>
          Click me!
          (
          {count}
          )
        </button>
      </p>
      <p>
        {[1, 2, 3].map((number) => (
          <button type="button" onClick={() => render({ count: number })}>
            {number}
          </button>
        ))}
      </p>
    </div>
  );

  root.textContent = '';
  root.appendChild(element);
}

render(counter);
