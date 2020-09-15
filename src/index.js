/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* eslint no-use-before-define: ["error", { "functions": false}] */
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

const count = {
  value: 0,
  setValue(value) {
    this.value = value;
  },
  increase() {
    this.value += 1;
  },
};

function handleClick(countObj) {
  countObj.increase();
  render();
}

function handleClickNumber(value, countObj) {
  countObj.setValue(value);
  render();
}

function render() {
  const numbers = [1, 2, 3];

  const element = (
    <div id="hello" className="greeting">
      <p>Hello, oceanide!</p>
      <p>
        <button type="button" onClick={() => handleClick(count)}>
          Click me!
          (
          {count.value}
          )
        </button>
      </p>
      <p>
        {numbers.map((number) => (
          <button type="button" onClick={() => handleClickNumber(number, count)}>
            {number}
          </button>
        ))}
      </p>
    </div>
  );
  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render();
