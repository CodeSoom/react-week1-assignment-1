/* eslint-disable no-underscore-dangle */
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

const counter = {
  count: 0,
};

function render() {
  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>by EHOTO</p>
      <p>
        <button type="button" onClick={() => { counter.count += 1; render(); }}>
          Click me! (
          {counter.count}
          )
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => { counter.count = i; render(); }}>
            {i}
          </button>
        ))}
      </p>
    </div>
  );
  // Main Logic
  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render();
