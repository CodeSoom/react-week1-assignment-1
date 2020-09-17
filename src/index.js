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

function render(count) {
  const numbers = [1, 2, 3];

  const handleClick = () => {
    render(count + 1);
  };

  const handleClickNumber = (number) => {
    render(number);
  };

  const element = (
    <div id="hello" className="greeting">
      <p>Hello, oceanide!</p>
      <p>
        <button type="button" onClick={() => handleClick()}>
          Click me!
          (
          {count}
          )
        </button>
      </p>
      <p>
        {numbers.map((number) => (
          <button type="button" onClick={() => handleClickNumber(number)}>
            {number}
          </button>
        ))}
      </p>
    </div>
  );
  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render(0);
