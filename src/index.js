/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* eslint no-use-before-define: ["error", { "functions": false}] */
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

function handleClick(number) {
  render(number + 1);
}

function handleClickNumber(number) {
  render(number);
}

function render(countNumber) {
  const numbers = [1, 2, 3];

  const element = (
    <div id="hello" className="greeting">
      <p>Hello, oceanide!</p>
      <p>
        <button type="button" onClick={() => handleClick(countNumber)}>
          Click me!
          (
          {countNumber}
          )
        </button>
      </p>
      <p>
        {numbers.map((number) => (
          <button type="button" onClick={() => handleClickNumber(number)}>
            {number}
          </button>
        ))}
      </p>
    </div>
  );
  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render(0);
