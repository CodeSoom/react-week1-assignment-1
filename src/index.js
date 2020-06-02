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

function setElement(count, handleClick, handleClickNumber) {
  return (
    <div id="hello" className="greeting">
      <p>hello, world</p>
      <p>hello, world!!!</p>
      <p>
        <button type="button" onClick={handleClick}>
          Click me!
          (
          {count}
          )
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (<button type="button" onClick={() => handleClickNumber(i)}>{i}</button>))}
      </p>
    </div>
  );
}

const count = {
  number: 0,
};

function render() {
  const handleClick = () => {
    count.number += 1;
    render();
  };

  const handleClickNumber = (value) => {
    count.number = value;
    render();
  };
  const element = setElement(count.number, handleClick, handleClickNumber);

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render();
