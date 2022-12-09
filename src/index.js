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

function render(count) {
  function increaseCount(accumulator) {
    render(accumulator + 1);
  }
  function changeNumber(number) {
    render(number);
  }
  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>
        <button type="button" onClick={() => increaseCount(count)}>
          Click me!
          (
          {count}
          )
        </button>
      </p>
      <p>
        {[1, 2, 3].map((number) => (
          <button type="button" onClick={() => changeNumber(number)}>
            {number}
          </button>
        ))}
      </p>
    </div>
  );
  document.querySelector('#app').textContent = '';
  document.querySelector('#app').appendChild(element);
}

render(0);
