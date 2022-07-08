/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
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

function render(count = 0) {
  function handleClickMe() {
    render(count + 1);
  }

  function handleNumberClick(clickedNumber) {
    render(clickedNumber);
  }

  function renderNumberButtons(array) {
    return array.map((i) => (
      <button
        type="button"
        onClick={() => handleNumberClick(i)}
      >
        {i}
      </button>
    ));
  }

  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>
        <button
          type="button"
          onClick={() => handleClickMe()}
        >
          Click me! (
          {count}
          )
        </button>
      </p>
      <p>
        {renderNumberButtons([1, 2, 3])}
      </p>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render();
