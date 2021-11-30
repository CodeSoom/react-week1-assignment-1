/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

const INIT_COUNT = 0;
const App = document.getElementById('app');

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

const render = (count) => {
  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>
        <button type="button" onClick={() => render(count + 1)}>
          Click me! (
          {count}
          )
        </button>
      </p>
      <p>
        {
          [1, 2, 3].map((i) => <button type="button" onClick={() => render(i)}>{i}</button>)
        }
      </p>
    </div>
  );

  App.textContent = '';
  App.appendChild(element);
};

render(INIT_COUNT);
