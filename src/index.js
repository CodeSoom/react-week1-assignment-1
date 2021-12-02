/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */
function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLocaleLowerCase()] = value;
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

class App {
  constructor() {
    this.state = {
      count: 0,
    };
  }

  setCount(newValue) {
    this.state.count = newValue;
    this.render();
  }

  handleClick() {
    const count = this.state.count + 1;
    this.setCount(count);
  }

  handleClickNumber(value) {
    const count = value;
    this.setCount(count);
  }

  render() {
    const element = (
      <div id="hello">
        <p className="greeting">Hello world!</p>
        <p>
          <button type="button" onClick={() => this.handleClick()}>
            Click Me! (
            {this.state.count}
            )
          </button>
        </p>
        <p>
          {[1, 2, 3].map((i) => (
            <button
              type="button"
              onClick={() => {
                this.handleClickNumber(i);
              }}
            >
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

const app = new App();
app.render();
