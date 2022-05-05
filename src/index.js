/* eslint-disable no-use-before-define */
/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension,
react/jsx-one-expression-per-line */
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

let count = 0;

function handleClick() {
  count += 1;
  render();
}

function handleClickNumber(value) {
  count = value;
  render();
}

function render() {
  const element = (
    <div id="hello" className="test">
      <p>Hi</p>
      <p>
        <button type="button" onClick={handleClick}>
          Click me! {count}
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => handleClickNumber(i)}>
            {i}
          </button>
        ))}
      </p>
    </div>
  );

  const app = document.getElementById('app');
  app.textContent = '';
  app.appendChild(element);
}

render();
