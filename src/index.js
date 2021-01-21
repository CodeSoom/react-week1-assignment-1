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
    this.state = { number: 0 };
  }

  addNumber() {
    this.state.number += 1;
    this.render();
  }

  setNumber(num) {
    this.state.number = num;
    this.render();
  }

  render() {
    const element = (
      <div id="hello" className="greeting">
        <p>Hello, world!</p>
        <p>
          <button id="count-click-btn" type="button" onClick={() => this.addNumber()}>
            Click me!
            (
            {this.state.number}
            )
          </button>
        </p>
        <p>
          {[1, 2, 3].map((i) => (
            <button type="button" onClick={() => this.setNumber(i)}>
              {i}
            </button>
          ))}
        </p>

      </div>
    );
    document.getElementById('app').textContent = '';
    document.getElementById('app').appendChild(element);
  }
}

const numberState = new NumberState();
numberState.render();
