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

function render({ count = 0 }) {
  const handleClickNumber = () => render({ count: count + 1 });
  const handleClickSetNumber = (number) => render({ count: number });

  const element = (
    <div id="hello" className="greeting">
      <p>Hello, World!</p>
      <p>
        <button type="button" onClick={handleClickNumber}>
          Click me!
          (
          {count}
          )
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => handleClickSetNumber(i)}>{i}</button>
        ))}
      </p>
    </div>
  );

  const app = document.getElementById('app');

  app.textContent = '';
  app.appendChild(element);
}

render({ count: 0 });
