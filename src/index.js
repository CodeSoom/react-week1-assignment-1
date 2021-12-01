/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* eslint-disable react/jsx-one-expression-per-line */
/* @jsx createElement */
const INIT_COUNT = 0;
const App = document.getElementById('app');

function createElement(tagName, props, ...children) {
  const element = children.flat().reduce((parent, child) => {
    if (child instanceof Node) {
      parent.appendChild(child);
      return parent;
    }
    parent.appendChild(document.createTextNode(child));
    return parent;
  }, document.createElement(tagName));

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });

  return element;
}

function render(count) {
  const element = (
    <div id="hello" className="greeting">
      <p>Hello World!</p>
      <p>
        <button type="button" onClick={() => render(count + 1)}>
          Click me! ({count})
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => render(i)}>
            {i}
          </button>
        ))}
      </p>
    </div>
  );

  App.textContent = '';
  App.appendChild(element);
}

render(INIT_COUNT);
