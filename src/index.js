/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagName, props, ...childrend) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });

  childrend.flat().forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild(document.createTextNode(child));
  });

  return element;
}

class Element {
  constructor(element) {
    this.element = element;
  }

  setChild(child) {
    this.element.textContent = '';
    this.element.appendChild(child);
  }
}

const appElement = new Element(document.getElementById('app'));

function countElement(count, parentElement) {
  function handleClick() {
    parentElement.setChild(countElement(count + 1, parentElement));
  }

  function handleClickNumber(value) {
    parentElement.setChild(countElement(value, parentElement));
  }

  return (
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>
        <button type="button" onClick={handleClick}>
          Click me!
          (
          {count}
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
}

appElement.setChild(countElement(0, appElement));
