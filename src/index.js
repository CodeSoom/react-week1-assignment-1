/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagName, props, ...children) {
  console.log(tagName, props, ...children);

  console.log(children);
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(
    ([key, value]) => (element[key.toLowerCase()] = value)
  );
  children.flat().forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }

    element.appendChild(document.createTextNode(child));
  });
  return element;
}

function handleClick(count) {
  render(count + 1);
}

function handleClickNumber(number) {
  render(number);
}

function render(count) {
  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>
        <button type="button" onClick={() => handleClick(count)}>
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
  document.getElementById("app").appendChild(element);
}

render(0);
