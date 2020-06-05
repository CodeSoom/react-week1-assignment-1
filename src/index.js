/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */

/* @jsx createElement */
const count = { num: 0 };

/* eslint-disable no-unused-vars */
function createElement(tags, props, ...children) {
  const element = document.createElement(tags);
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
/* eslint-enable no-unused-vars */

function handleClick() {
  count.num += 1;
  render();
}

function handleClickNumber(value) {
  count.num = value;
  render();
}

/* eslint no-use-before-define: ["error", { "functions": false }] */
function render() {
  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>
        <button type="button" onClick={handleClick}>
          Click me!
          (
          { count.num }
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
