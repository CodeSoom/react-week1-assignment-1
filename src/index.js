/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  children.flat().forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild(document.createTextNode(child));
  });

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });

  return element;
}

function getInnerTextById(id) {
  return document.getElementById(id).innerText;
}

function setInnerTextById(id, replace) {
  document.getElementById(id).innerText = replace;
}

function handleClick() {
  const innerText = getInnerTextById('count-click-btn');

  const replaced = innerText.replace(/[0-9]+/g, (match) => parseInt(match, 10) + 1);

  setInnerTextById('count-click-btn', replaced);
}

function handleClickNumber(value) {
  const innerText = getInnerTextById('count-click-btn');

  const replaced = innerText.replace(/[0-9]+/g, () => value);
  setInnerTextById('count-click-btn', replaced);
}

const element = (
  <div id="hello" className="greeting">
    <p>Hello, world!</p>
    <p>
      <button id="count-click-btn" type="button" onClick={handleClick}>
        Click me!
        (0)
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
document.getElementById('app').textContent = '';
document.getElementById('app').appendChild(element);
