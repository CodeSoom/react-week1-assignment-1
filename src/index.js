/* eslint-disable no-underscore-dangle */
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

class CountComponent {
  constructor(count = 0) {
    this._count = count;
  }

  get count() {
    return this._count;
  }

  // Method
  handleClick() {
    this._count += 1;
    this.render();
  }

  handleClickNumber(value) {
    this._count = value;
    this.render();
  }

  render() {
    const element = (
      <div id="hello" className="greeting">
        <p>Hello, world!</p>
        <p>by EHOTO</p>
        <p>
          <button type="button" onClick={() => this.handleClick()}>
            Click me! (
            {this._count}
            )
          </button>
        </p>
        <p>
          {[1, 2, 3].map((i) => (
            <button type="button" onClick={() => this.handleClickNumber(i)}>
              {i}
            </button>
          ))}
        </p>
      </div>
    );
    // Main Logic
    document.getElementById('app').textContent = '';
    document.getElementById('app').appendChild(element);
  }
}

const countUI = new CountComponent(0);
countUI.render();
