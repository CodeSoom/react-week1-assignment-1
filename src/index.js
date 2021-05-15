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

const render = (count) => {
  const handleClick = () => {
    render(count + 1);
  };

  const handleClickNumber = (value) => {
    render(value);
  };

  const element = (
    <div id="hello">
      <p>Hello World</p>
      <button type="button" onClick={() => handleClick()}>
        {`Click me! (${count})`}
      </button>
      <p />
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
};

const COUNT = 0;
render(COUNT);
