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

function render({ count, something }) {
  const handleClick = () => render({ count: count + 1, something: something - 1 });
  const handleClickNumber = (number) => render({ count: number, something: number - 1 });

  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>
        <button type="button" onClick={() => handleClick()}>
          Click me! (
          {count}
          )
          {' '}
          {something}
        </button>
      </p>
      {[1, 2, 3].map((number) => (
        <button type="button" onClick={() => handleClickNumber(number)}>
          {number}
        </button>
      ))}
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render({ count: 0, something: 0 });
