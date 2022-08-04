/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* eslint no-use-before-define: ["error", { "functions": false }] */
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

function render(count = 1) {
  function handleClick() {
    render(count + 1);
  }

  function handleClickNumber(buttonNumber) {
    render(buttonNumber);
  }

  const element = (
    <div>
      <p className="test">Hello, world!</p>
      <p>
        <button type="button" onClick={handleClick}>
          Click me!
          (
          {count}
          )
        </button>
      </p>
      {[1, 2, 3].map((buttonNumber) => (
        <button type="button" onClick={() => handleClickNumber(buttonNumber)}>
          {buttonNumber}
        </button>
      ))}
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}
render();
