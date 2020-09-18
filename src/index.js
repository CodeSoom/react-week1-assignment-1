/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);
  const mapPropsToAttribute = ([key, value]) => {
    element[key.toLowerCase()] = value;
  };
  const appendChild = (child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild(document.createTextNode(child));
  };

  Object.entries(props || {}).forEach(mapPropsToAttribute);

  children.flat().forEach(appendChild);

  return element;
}

function render(count) {
  const handleClick = () => {
    render(count + 1);
  };
  const handleClickNumber = (number) => {
    render(number);
  };

  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>
        <button type="button" onClick={handleClick}>
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

render(0);
