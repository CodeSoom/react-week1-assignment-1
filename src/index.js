/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

const createElement = (tagname, props, ...children) => {
  const element = document.createElement(tagname);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });

  children.flat().forEach((child) => {
    const nodeToAppend = (child instanceof Node)
      ? child
      : document.createTextNode(child);

    element.appendChild(nodeToAppend);
  });

  return element;
};

const render = (count) => {
  const element = (
    <div id="counter">
      <p>Hello, world</p>
      <p>
        <button type="button" onClick={() => render(count + 1)}>
          Click me!
        </button>
        (
        {count}
        )
      </p>
      <p>
        {[1, 2, 3].map((newCount) => (
          <button
            type="button"
            onClick={() => render(newCount)}
          >
            {newCount}
          </button>
        ))}
      </p>
    </div>
  );

  const container = document.getElementById('app');
  container.textContent = '';
  container.appendChild(element);
};

const initialCount = 0;
render(initialCount);
