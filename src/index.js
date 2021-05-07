/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension, */
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

// const handleClick = (count) => render(count + 1);

function render(count = 0) {
  const element = (
    <div id="hello" className="greeting">
      <p>Hello, wordl!!</p>
      <p>
        <button
          type="button"
          onClick={
            () => render(count + 1)
            // handleClick
          }
        >
          Click me!
          {' '}
          {`(${count})`}
        </button>
      </p>
      {[1, 2, 3].map((i) => (
        <button
          type="button"
          onClick={() => render(i)}
        >
          {i}
        </button>
      ))}
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render();
