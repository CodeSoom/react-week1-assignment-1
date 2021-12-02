/*
  eslint-disable react/react-in-jsx-scope,
  react/jsx-filename-extension,
  react/jsx-one-expression-per-line,
  quotes,
  no-param-reassign
*/

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

function render() {
  const count = { number: 0 };

  const handleClick = () => {
    count.number += 1;
    render();
  };

  const handleClickNumber = (number) => {
    count.number = number;
    render();
  };

  const element = (
    <div id="hello" className="world">
      <p>Hello, React</p>
      <p>
        <button type="button" onClick={() => handleClick()}>
          Click me! ({count.number})
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

render();
