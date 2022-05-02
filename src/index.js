/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

// let count = 0;

// function handleClick() {
//   count = count + 1;
//   render();
// }

const counter = {
  count: 0,
  handleClick() {
    this.count += 1;
    render();
  },
};

const container = document.getElementById("app");

function render() {
  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>
        <button type="button" onClick={counter.handleClick}>
          Click me! ({counter.count})
        </button>
      </p>
    </div>
  );

  container.textContent = "";
  container.appendChild(element);
}

render();
