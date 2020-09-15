/* eslint-disable no-use-before-define */
/* eslint-disable react/button-has-type */
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

//

const number = {
  count: 0,
};
function handleClick() {
  number.count += 1;
  render();
}

function handleClickNumber(value) {
  number.count = value;
  render();
}

function render() {
  const element = (
    <div id="hello" classNAme="greeting">
      <p>Hello, world</p>
      <p>
        <button onClick={handleClick}>
          Click me! (
          {number.count}
          )
          {' '}
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => <button onClick={() => handleClickNumber(i)}>{i}</button>)}
      </p>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render();
