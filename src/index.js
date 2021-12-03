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

function renderTemplate(element) {
  const app = document.getElementById('app');
  app.textContent = '';
  app.appendChild(element);
}

function render(count = 0) {
  function handleClickNumber(value) {
    render(value);
  }

  renderTemplate((
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>
        <button type="button" onClick={() => handleClickNumber(count + 1)}>
          Click me!
          (
          {count}
          )
        </button>
      </p>
      <p>
        {[1, 2, 3].map((number) => (
          <button type="button" onClick={() => handleClickNumber(number)}>
            {number}
          </button>
        ))}
      </p>
    </div>
  ));
}

render();
