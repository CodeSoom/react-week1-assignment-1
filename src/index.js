/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });

  children.flat().forEach((child) => {
    if (child instanceof Node) {
      element.append(child);
      return;
    }
    element.append(document.createTextNode(child));
  });

  return element;
}

//

function render(count = 0) {
  function handleClick() {
    render(count + 1);
  }

  function handleClickNumber(value) {
    render(value);
  }

  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world</p>
      <p>
        <button type="button" onClick={handleClick}>
          Click me! ({count})
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => handleClickNumber(i)}>
            {i}
          </button>
        ))}
      </p>
    </div>
  );
  document.getElementById("app").textContent = "";
  document.getElementById("app").append(element);
}

render();
