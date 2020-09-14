/* eslint-disable no-use-before-define */
/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

const handleCount = (newCount = 0) => {
  const count = newCount + 1;
  return count;
};

function handleClick(CountNumber) {
  const plusCount = handleCount(CountNumber);
  render(plusCount);
  handleCount(plusCount);
}

function render(plusCount = 0) {
  const CountNumber = plusCount;
  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>
        <button type="button" onClick={() => handleClick(CountNumber)}>
          Click me! (
          {CountNumber}
          )
        </button>
      </p>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });
  children.forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild(document.createTextNode(child));
  });
  return element;
}

render();
