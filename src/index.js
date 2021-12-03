/*
  eslint-disable
  react/react-in-jsx-scope,
  react/jsx-filename-extension,
  react/jsx-one-expression-per-line,
*/

/* @jsx createElement */

const count = { number: 0 };

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

function getAppElement() {
  return document.getElementById('app');
}

function render() {
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
        <button type="button" onClick={handleClick}>
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

  getAppElement().textContent = '';
  getAppElement().appendChild(element);
}

render();
