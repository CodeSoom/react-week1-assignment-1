/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */
function createElement(tagName, props, ...children) {
  const newElement = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    newElement[key.toLowerCase()] = value;
  });
  children.flat().forEach((child) => {
    if (child instanceof Node) {
      newElement.appendChild(child);
      return;
    }
    newElement.appendChild(document.createTextNode(child));
  });

  return newElement;
}

function handleClick(value) {
  return value + 1;
}

function handleClickNumber(i) {
  return i;
}

function render(value = 0) {
  const element = ( // eslint-disable-line no-unused-vars
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>
        <button type="button" onClick={() => { render(handleClick(value)); }}>
          Click me! (
          {value}
          )
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => { render(handleClickNumber(i)); }}>
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
