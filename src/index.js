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

function handleClick() {
  const content = document.getElementById('count').textContent;
  const number = parseInt(content.match(/[\d]+/)[0], 10);
  render(number + 1);
}

function handleClickNumber(i) {
  render(i);
}

function render(count) {
  const element = (
    <div id="hello" className="greeting">
      <p>
        Hello, world!
      </p>
      <p>
        <button id="count" type="button" onClick={handleClick}>
          Click me!
          (
          {count}
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

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render(0);
