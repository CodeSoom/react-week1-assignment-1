/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

const initialState = {
  count: 0,
};

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

function render({ count }) {
  const handleClick = () => {
    render({ count: count + 1 });
  };

  const handleClickNumber = (value) => {
    render({ count: value });
  };

  const element = (
    <div id="hello" className="greeting">
      <p>Hello World!</p>
      <p>
        <button type="button" onClick={handleClick}>
          Click me! (
          {count}
          )
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

  App.textContent = '';
  App.appendChild(element);
}

render(initialState);
