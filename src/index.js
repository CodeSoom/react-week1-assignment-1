/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* eslint-disable react/jsx-one-expression-per-line */
/* @jsx createElement */
const INIT_COUNT = 0;
const app = document.getElementById('app');

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

function setCounter({ count }) {
  return {
    count,
  };
}

function increaseCounterClickHandler({ count }) {
  return setCounter({ count: count + 1 });
}

function setCounterClickHandler({ count }) {
  return setCounter({ count });
}

function render({ count }) {
  const element = (
    <div id="hello" className="greeting">
      <p>Hello World!</p>
      <p>
        <button
          type="button"
          onClick={() => render(increaseCounterClickHandler({ count }))}
        >
          Click me! ({count})
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button
            type="button"
            onClick={() => render(setCounterClickHandler({ count: i }))}
          >
            {i}
          </button>
        ))}
      </p>
    </div>
  );

  app.textContent = '';
  app.appendChild(element);
}

render({ count: INIT_COUNT });
