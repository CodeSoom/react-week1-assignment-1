/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);
  Object.entries(props || {}).forEach(([key, value]) => {
    if (key === 'className') {
      element[key] = value;
      return;
    }
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

function render(count = 0) {
  const root = (
    <div>
      <div>
        <p className="description">if you press button, it counts times</p>
      </div>
      <button
        className="clickButton"
        type="button"
        onClick={() => {
          render(+count + 1);
        }}
      >
        Click me!
        {' '}
        (
        {count}
        )
        {' '}
      </button>
      <p>
        {['1', '2', '3', '4'].map((i) => (
          <button
            type="button"
            onClick={() => {
              render(i);
            }}
          >
            {i}
          </button>
        ))}
      </p>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(root);
}

render(0);
