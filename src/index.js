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

function render({ count }) {
  function handleClick({ prevCount }) {
    return render({ count: prevCount + 1 });
  }

  function handleClickNumber({ toBeCount }) {
    return render({ count: toBeCount });
  }

  const element = (
    <div id="hello" className="greeting">
      <p>Hello World!</p>
      <p>
        <button type="button" onClick={() => handleClick({ prevCount: count })}>
          Click me! ({count})
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button
            type="button"
            onClick={() => handleClickNumber({ toBeCount: i })}
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
