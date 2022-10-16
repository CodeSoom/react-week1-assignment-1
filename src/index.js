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

function render(state) {
  const addCount = (count) => {
    render({ ...state, count: count + 1 });
  };

  const setCount = (value) => {
    render({ ...state, count: value });
  };

  const template = (
    <div>
      <div id="title">
        <p>hello world!</p>
        <p>hello world!!</p>
      </div>
      <div>
        <button type="button" onClick={() => addCount(state.count)}>
          Click me (
          {state.count}
          )
        </button>
        <div>
          {[1, 2, 3].map((i) => (
            <button type="button" onClick={() => setCount(i)}>
              {i}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const container = document.getElementById('app');
  container.textContent = '';
  container.appendChild(template);
}

const initState = {
  count: 0,
};

render(initState);
