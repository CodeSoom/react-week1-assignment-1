/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension, no-use-before-define */
/* @jsx createElement */

function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
    return element;
  });

  children.flat().forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
    } else {
      element.appendChild(document.createTextNode(child));
    }
  });

  return element;
}

function render(count) {
  const element = (
    <div>
      <p>
        Hello, world
      </p>
      <p id="count">
        {count}
      </p>
      <p>
        <button type="button" onClick={handleClick}>
          click me!
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

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

function handleClick() {
  const count = document.getElementById('count').textContent;
  render(parseInt(count, 10) + 1);
}

function handleClickNumber(i) {
  render(i);
}

render(0);
