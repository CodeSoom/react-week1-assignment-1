/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(name, props, ...children) {
  const elem = document.createElement(name);

  Object.entries(props || {}).forEach(([key, value]) => {
    elem[key.toLowerCase()] = value;
  });

  children.forEach((child) => {
    if (child instanceof Node) {
      elem.appendChild(child);
      return;
    }
    elem.appendChild(document.createTextNode(child));
  });
  return elem;
}

function render(count) {
  function handleClickCount() {
    render(count + 1);
  }

  function handleClickNumber() {
    render(2);
  }

  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>
        <button
          type="button"
          onClick={handleClickCount}
        >
          Click me!
          (
          {count}
          )
        </button>
        <button
          type="button"
          onClick={handleClickNumber}
        >
          2
        </button>
      </p>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render(0);
