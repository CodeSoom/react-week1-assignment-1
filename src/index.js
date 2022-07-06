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

function render(count = 0) {
  function handleClickNumber(value) {
    render(value);
  }

  function handleClick(value) {
    render(value);
  }

  const element = (
    <div id="'hi'">
      <p>Hello World</p>
      <p>
        <button type='button' onClick={() => handleClick(count + 1)}>
          Click! ({count})
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button type='button' onClick={() => handleClickNumber(i)}>
            {i}
          </button>
        ))}
      </p>
    </div>
  );
  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render();
