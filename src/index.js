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
createElement('p', null, 'hello');

const state = {
  const: 0,
};

function plusCount() {
  state.const += 1;
}

function render() {
  const element = (
    <div id="hello" className="greeting">
      <p>
        <button
          type="button"
          onClick={() => {
            plusCount();
            render();
          }}
        >
          Click me!
          (
          {state.const}
          )
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button
            type="button"
            onClick={() => {
              state.const = i;
              render();
            }}
          >
            {i}

          </button>
        ))}
      </p>
    </div>
  );

  document.getElementById('app').innerText = '';
  document.getElementById('app').appendChild(element);
}

render();
