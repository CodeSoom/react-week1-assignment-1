/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* eslint-disable react/jsx-one-expression-per-line, no-use-before-define */
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

function handleClick(count) {
  render(count + 1);
}

function handleClickNumber(value) {
  render(value);
}

function render(count = 0) {
  const element = (
    <div id="hello" className="greet">
      <p>Hello, World!!</p>
      <p>
        <button type="button" onClick={() => handleClick(count)}>
          Click me!({count})
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
