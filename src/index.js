/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

const createElement = (tagName, props, ...children) => {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLocaleLowerCase()] = value;
  });

  children.flat().forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild(document.createTextNode(child));
  });
  return element;
};

function clickHandler(state) {
  render({ count: state + 1 });
}

function clickNumberHandler(clickedNumber) {
  render({ count: clickedNumber });
}

function render({ count }) {
  const element = (
    <div>
      <button type="button" onClick={() => clickHandler(count)}>
        Click me!({count})
      </button>
      <p>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => clickNumberHandler(i)}>
            ({i})
          </button>
        ))}
      </p>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render({ count: 0 });
