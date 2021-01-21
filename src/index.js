/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagName, props, ...children) {
  // console.log(tagName, props, ...children);

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

// function handleClickNumber(value) {
//   count = value;
//   render();
// }

const btn = {
  counter: 0,
  handleClick: () => {
    btn.counter += 1;
    render();
  },
  handleClickNumber: function (value) {
    btn.counter = value;
    render();
  },
};

function render() {
  const element = (
    <div id="hello" className="greeting">
      <p>Hello world!</p>
      <p>
        {/* <button type="button" onClick={handleClick}> */}
        <button type="button" onClick={btn.handleClick}>
          {/* Click me! ({count}) */}
          Click me! ({btn.counter})
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          // <button type="button" onClick={() => handleClickNumber(i)}>
          <button type="button" onClick={() => btn.handleClickNumber(i)}>
            {i}
          </button>
        ))}
      </p>
    </div>
  );

  document.getElementById("app").textContent = "";
  document.getElementById("app").appendChild(element);
}

render();
