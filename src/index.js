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

class App {
  constructor() {
    this.count = 0;
    this.render();
  }

  handleClick() {
    this.count += 1;
    this.render();
  }

  handleClickNumber(value) {
    this.count = value;
    this.render();
  }

  render() {
    const element = (
      <div id="hello" className="greeting">
        <p>Remove let</p>
        <button type="button" onClick={() => this.handleClick()}>
          Click me! (
          {this.count}
          )
        </button>
        <p>
          {[1, 2, 3].map((i) => (
            <button type="button" onClick={() => this.handleClickNumber(i)}>{i}</button>
          ))}
        </p>
      </div>
    );

    document.getElementById('app').textContent = '';
    document.getElementById('app').appendChild(element);
  }
}

new App(document.querySelector('app'));