/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagName, props, ...children) {
  // console.log(tagName, props, ...children);

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

const count = [0];

function handleClick() {
  count[0] += 1;
}

function handleClickNumber(value) {
  count[0] = value;
}

function render() {
  const element = (
    <div id="hello" className="greeting">
      <p>Hello, wordl!!</p>
      <p>
        <button
          type="button"
          onClick={() => {
            handleClick();
            render();
          }}
        >
          Click me!
          {' '}
          {`(${count[0]})`}
        </button>
      </p>
      {[1, 2, 3].map((i) => (
        <button
          type="button"
          onClick={() => {
            handleClickNumber(i);
            render();
          }}
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
