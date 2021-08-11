/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

const CONSTANT = {
  INIT_COUNT: 0,
};

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

const { log } = console;

function render(count) {
  const handleClick = () => {
    const newCount = count + 1;

    log(newCount);
    render(newCount);
  };

  const handleClickNumber = (value) => {
    render(value);
  };

  const element = (
    <div id="hello" className="greeting">
      <p>Hello World!</p>
      <p>
        <button type="button" onClick={handleClick}>
          Click me! (
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

render(CONSTANT.INIT_COUNT);
