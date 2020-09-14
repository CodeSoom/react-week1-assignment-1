/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* eslint-disable react/jsx-one-expression-per-line */
/* @jsx createElement */

function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });

  children.flat().forEach(
    (child) => {
      if (child instanceof Node) {
        element.appendChild(child);
        return;
      }
      element.appendChild(document.createTextNode(child));
    },
  );
  return element;
}

function getCount() {
  return parseInt(document.getElementById('count').innerText, 10);
}

function setCount(value) {
  document.getElementById('count').innerText = value;
}

function handleClick() {
  const count = getCount();

  setCount(count + 1);
}

function handleClickNumber(value) {
  setCount(value);
}

function render() {
  const element = (
    <div id="hello" className="greeting">
      <p>Hello, World!</p>
      <p>
        <button type="button" onClick={handleClick}>
          Click me!(<span id="count">0</span>)
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => handleClickNumber(i)}>{i}</button>
        ))}
      </p>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render();
