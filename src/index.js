/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  children.flat().forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild(document.createTextNode(child));
  });

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });

  return element;
}
class NumberState {
  constructor() {
    this.num = 0;
  }

  get number() {
    return this.num;
  }

  setNumber(num, callback) {
    this.num = num;
    callback();
  }

  addNumber(callback) {
    this.num += 1;
    callback();
  }
}

const numberState = new NumberState();

function render() {
  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>
        <button id="count-click-btn" type="button" onClick={() => numberState.addNumber(render)}>
          Click me!
          (
          {numberState.number}
          )
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => numberState.setNumber(i, render)}>
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
