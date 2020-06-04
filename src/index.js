/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension, no-use-before-define */
/* @jsx createElement */


function createElement(tagName, props, ...children) { // eslint-disable-line no-unused-vars
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

function handleClickNumber(value) {
  render(value);
}

function handleClick(count) {
  render(count += 1);
}

function render(count) {
  const element = (
    <div id="hello" className="greetings">
      <p>Hello, World!!</p>
      <p>
        <button type="button" onClick={() => handleClick(count)}>
          Click Me!
          (
          {count}
          )
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => handleClickNumber(i)}>
            { i }
          </button>
        ))}
      </p>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render(0);
