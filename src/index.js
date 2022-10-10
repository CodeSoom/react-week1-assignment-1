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

const p1Template = (
  <div id="title">
    <p>hello world!</p>
    <p>hello world!!</p>
  </div>
);

const p2Template = (count, addCount, setCount) => (
  <div>
    <button type="button" onClick={() => addCount(count)}>
      Click me (
      {count}
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
);

function render(state) {
  const addCount = (count) => { render({ ...state, count: count + 1 }); };
  const setCount = (value) => { render({ ...state, count: value }); };
  const p1 = createElement(
    'p',
    null,
    p1Template,
  );
  const p2 = createElement(
    'p',
    null,
    p2Template(state.count, addCount, setCount),
  );
  const root = createElement('div', null, p1, p2);

  const container = document.getElementById('app');

  container.textContent = '';
  container.appendChild(root);
}

const initState = {
  count: 0,
};

render(initState);
