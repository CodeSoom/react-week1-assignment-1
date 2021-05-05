/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagName, props = {}, ...children) {
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

function clickCount(value) {
  const valueInt = parseInt(value, 10) + 1;
  render(valueInt);
}

function handlerClick(ValueClick) {
  render(ValueClick);
}

function render(valueRender) {
  const element = (
    <div id="hello" className="greeting">
      <p>hello World</p>
      <p>

        <button
          id="button"
          type="button"
          value={valueRender}
          onClick={() => clickCount(document.getElementById('button').value)}
        >
          Click me!
          (
          {valueRender}
          )
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => handlerClick(i)}>
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
