/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* eslint no-use-before-define: ["error", { "functions": false}] */
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

const count = {
  value: 0,
};

function handleClick() {
  count.value += 1;
  render();
}

function handleClickNumber(value) {
  count.value = value;
  render();
}

function render() {
  const element = (
    <div id="hello" className="greeting">
      <p>Hello, oceanide!</p>
      <p>
        <button type="button" onClick={handleClick}>
          Click me!
          (
          {count.value}
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

render();
