/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

const createElement = (tagName, props, ...children) => {
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
};

const render = (countNumber = 0) => {
  const handleClick = (value) => {
    if (value) {
      render(value);

      return;
    }

    render(countNumber + 1);
  };

  const element = (
    <div>
      <h1 id="title">Assignment 1 : Remove var</h1>
      <button type="button" onClick={() => handleClick()}>
        Click me!
        {` (${countNumber})`}
      </button>
      <div>
        {[1, 2, 3].map((number) => (
          <button type="button" onClick={() => handleClick(number)}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
};

render();
