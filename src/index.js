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

class Counter {
  constructor() {
    this.count = 0;
  }

  increase() {
    this.count += 1;
  }

  setCount(value) {
    this.count = value;
  }
}

const counter = new Counter();

function render() {
  function handleClick() {
    counter.increase();
    render();
  }

  function handleClickNumber(value) {
    counter.setCount(value);
    render();
  }

  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <div>
        <button type="button" onClick={handleClick}>
          Click me! (
          {counter.count}
          )
        </button>
      </div>
      <div>
        {[1, 2, 3].map((number) => (
          <button type="button" onClick={() => handleClickNumber(number)}>{number}</button>
        ))}
      </div>
    </div>
  );

  document.getElementById('app').innerHTML = '';
  document.getElementById('app').appendChild(element);
}

render();
