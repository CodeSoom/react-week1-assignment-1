/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */

/* @jsx createElement */
function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  const properties = {};
  const dataset = {};
  Object.entries(props || {}).forEach(([key, value]) => {
    if (key.startsWith('data-')) {
      const dataKey = key.replace('data-', '');
      dataset[dataKey] = value;
      return;
    }
    const property = key === 'className' ? key : key.toLowerCase();
    properties[property] = value;
  });

  Object.entries(properties).forEach(([key, value]) => {
    element[key] = value;
  });
  Object.entries(dataset).forEach(([key, value]) => {
    element.dataset[key] = value;
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

function handleClick(event) {
  const { target } = event;
  const root = target.closest('#root');
  const { dataset: { id } } = root;

  render({ count: Number(id) + 1 });
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
          Click me!
          (
          {count}
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

render({ count: 0 });
