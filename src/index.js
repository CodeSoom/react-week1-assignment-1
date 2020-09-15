/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-use-before-define */
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
  $target = null;
  data = 0;

  constructor($target) {

    this.$target = $target;
    this.$target.textContent = "";
    this.render();
  }

  setCount() {
    console.log('this.data', this.data);
    this.data++;
    this.render();
  }

  getCount(value) {
    this.data = value;
    this.render();
  }

  render() {
    const element = (
      <div id="hello" className="greeting">
        <p>Hello, world!</p>
        <p>
          <button type="button" onClick={() => this.setCount()}>
            Click me! ({this.data})
          </button>
        </p>
        <p>
          {[1, 2, 3].map((i) => (
            <button type="button" onClick={() => this.getCount(i)}>
              {i}
            </button>
          ))}
        </p>
      </div>
    );
    this.$target.textContent = "";
    this.$target.appendChild(element);
  }
}

new App(document.getElementById("app"));