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

const appElement = document.getElementById('app');
const startCount = 0;

function handleClick(count) {
  const nextCount = count + 1;
  // eslint-disable-next-line no-use-before-define
  render(appElement, insertElements, nextCount);
}

const insertElements = (countNumber) => (
  <div id="hello" className="greet">
    <p>hello world</p>
    <button type="button" onClick={() => handleClick(countNumber)}>
      Click me!
      (
      {countNumber}
      )
    </button>
  </div>
);

function render(wrapElement, elements, count) {
  const container = wrapElement;
  container.textContent = '';
  container.appendChild(elements(count));
}

render(appElement, insertElements, startCount);
