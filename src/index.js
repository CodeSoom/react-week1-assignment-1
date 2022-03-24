/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagName, props, ...chlidren) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });

  chlidren.flat().forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild(document.createTextNode(child));
  });

  return element;
}

//
let count = 0;

function handleClick() {
  count += 1;

  render();
}

function handleClickNumber(value) {
  count = value;

  render();
}

function render() {
  const element = (
    <div id="hello" className="greeting">
      <p>hell worlod</p>
      <p>
        <button type="button" onClick={handleClick}>
          Click me!
          (
          {count.slice().pop()}
          )
        </button>
      </p>
      <p>
        {[1, 2, 3, 4, 5].map((i) => (
          <button type="button" onClick={() => handleClickNumber(i)}>
            {i}
          </button>
        ))}
      </p>
    </div>
  );

  const container = document.getElementById('app');

  container.innerText = '';
  container.appendChild(element);
}

render();
