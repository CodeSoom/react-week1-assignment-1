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

function render({ count }) {
  function handleClick() { render({ count: count + 1 }); }
  function handleClickNum(value) { render({ count: value }); }

  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>
        <button type="button" onClick={handleClick}>
          Click me!!! (
          {count}
          )
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => handleClickNum(i)}>
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

render({ count: 0 });
