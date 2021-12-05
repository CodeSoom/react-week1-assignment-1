/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

const START_COUNT = 0;
const app = document.getElementById('app');

function createElement(tagName, props, ...children) {
  const $element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    $element[key.toLowerCase()] = value;
  });

  children.flat().forEach(($child) => {
    if ($child instanceof Node) {
      $element.appendChild($child);
      return;
    }
    $element.appendChild(document.createTextNode($child));
  });

  return $element;
}

function render({ count = 0 }) {
  function handleIncreaseCount() {
    render({ count: count + 1 });
  }

  function handleClickNumber(number) {
    render({ count: number });
  }

  const element = (
    <div id="hello" className="greeting">
      <p>Hello, World</p>
      <p>
        <button type="button" onClick={handleIncreaseCount}>
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
  );

  app.textContent = '';
  app.appendChild(element);
}

render({ count: START_COUNT });
