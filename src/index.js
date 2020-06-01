/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */

/* @jsx createElement */

// eslint-disable-next-line no-unused-vars
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

const initCountArray = [1, 2, 3];

const countObject = {
  value: 0,
};

function handleClick() {
  countObject.value += 1;
  // eslint-disable-next-line no-use-before-define
  render();
}

function handleClickNumber(initCountValue) {
  countObject.value = initCountValue;
  // eslint-disable-next-line no-use-before-define
  render();
}

function render() {
  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>
        <button type="button" onClick={handleClick}>
          Click me! (
          {countObject.value}
          )
        </button>
      </p>
      <p>
        {initCountArray.map((i) => (
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

render();
