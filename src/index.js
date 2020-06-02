/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */
function createElement(tagName, props, ...children) {
  const newElement = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    newElement[key.toLowerCase()] = value;
  });
  children.flat().forEach((child) => {
    if (child instanceof Node) {
      newElement.appendChild(child);
      return;
    }
    newElement.appendChild(document.createTextNode(child)); 
  });

  return newElement;
}

let count = 0;

function handleClick() {
  count += 1;
  render();
}

function handleClickNumber(value) {
  count = value;
  render();
}

const render = function(){
  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>
        <button type="button" onClick={handleClick}>
          Click me! (
            {count}
          )
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick ={() => handleClickNumber(i)}>
            {i}
          </button>
        ))}
      </p>
    </div>
  );
  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render();