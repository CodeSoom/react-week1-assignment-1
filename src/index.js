/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */
const initialState = { count: 0 };

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
  function setCount(newCount) {
    return () => { render({ count: newCount }); };
  }

  const root = document.getElementById('app');

  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>
        <button type="button" onClick={setCount(count + 1)}>
          Click Me!
          (
          {count}
          )
        </button>
        <p>
          {[1, 2, 3].map((i) => (<button type="button" onClick={setCount(i)}>{i}</button>))}
        </p>
      </p>
    </div>
  );

  root.textContent = '';
  root.appendChild(element);
}

render(initialState);
