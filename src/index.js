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
  constructor(count) {
    this.count = count || 0;
  }

  handleClickCounter() {
    this.count += 1;
    this.render();
  }

  handleClickNumber(number) {
    this.count = number;
    this.render();
  }

  countElement() {
    return (
      <div id="hello" className="greeting">
        <p>Hello, world!</p>
        <p>
          <button type="button" onClick={() => this.handleClickCounter()}>
            Click me! (
            {this.count}
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
  }

  render() {
    const app = document.getElementById('app');
    app.textContent = '';
    app.appendChild(this.countElement());
  }
}

const counter = new Counter();
counter.render();
