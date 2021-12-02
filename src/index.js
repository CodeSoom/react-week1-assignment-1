/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */

/* @jsx createElement */
function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    const property = key === 'className' ? key : key.toLowerCase();
    element[property] = value;
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

const state = {
  count: 0,
};

function handleClick(event) {
  const { target } = event;
  const root = target.closest('#root');
  const { dataset: { id } } = root;

  render({ count: id + 1 });
}

function handleClickNumber(i) {
  render({ count: i });
}

function render({ count }) {
  const element = (
    <div id="root" className="hello" data-id={count}>
      <p>Hello, World!</p>
      <p>
        <button type="button" onClick={(event) => handleClick(event)}>
          Click Me!
          (
          {state.count}
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

render({ count: 1 });
