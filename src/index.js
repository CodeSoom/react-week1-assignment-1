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

const counter = {
  currentCount: 0,
};

const app = document.getElementById('app');

function render() {
  function handleClick() {
    counter.currentCount += 1;
    render();
  }

  function handleClickNumber(value) {
    counter.currentCount = value;
    render();
  }

  const element = (
    <div id="hello" className="hi">
      <p>Hello, world!</p>
      <p>
        <button type="button" onClick={() => handleClick()}>
          Click me!
          (
          {counter.currentCount}
          )
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

  app.textContent = '';
  app.appendChild(element);
}

render();
