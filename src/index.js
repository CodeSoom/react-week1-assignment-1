/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);
  Object.entries(props || {}).forEach(([key, value]) => { element[key.toLowerCase()] = value; });
  children.flat().forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild(document.createTextNode(child));
  });
  return element;
}

function handleClick() {
  document.getElementById('test').innerText = `Click me! (${(parseInt(document.getElementById('test').innerText.split('(')[1].split(')')[0], 10) + 1).toString()})`;
}
function handleClickNumber(i) {
  document.getElementById('test').innerText = `Click me! (${i})`;
}

function render() {
  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>
        <button id="test" type="button" onClick={handleClick}>
          Click me!
          (0)
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => handleClickNumber(i)}>{i}</button>))}
      </p>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render();
