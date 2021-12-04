/*
  eslint-disable
  react/react-in-jsx-scope,
  react/jsx-filename-extension,
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

function getElement(id) {
  return document.getElementById(id);
}

function render({ count }) {
  const handleClick = () => {
    render({ count: count + 1 });
  };

  const handleClickNumber = (i) => {
    render({ count: i });
  };

  const element = (
    <div id="hello" className="world">
      <p>Hello, React</p>
      <p>
        <button type="button" onClick={handleClick}>
          Click me! (
          { count }
          )
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

  getElement('app').textContent = '';
  getElement('app').appendChild(element);
}

render({ count: 0 });
