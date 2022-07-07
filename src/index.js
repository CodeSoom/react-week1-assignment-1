/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */
function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });

  children.flat().forEach((child) => {
    if (child instanceof Node) {
      return element.appendChild(child);
    }
    return element.appendChild(document.createTextNode(child));
  });

  return element;
}

function render({ count = 0 }) {
  const appElement = document.getElementById('app');

  function handleClickNumber(value) {
    render({ count: value });
  }

  function handleClick() {
    render({ count: count + 1 });
  }

  const element = (
    <div id="'hi'">
      <p>Hello World</p>
      <p>
        <button type="button" onClick={() => handleClick()}>
          {`Click me! (${count})`}
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
  appElement.textContent = '';
  appElement.appendChild(element);
}

render({});
