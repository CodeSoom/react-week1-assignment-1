/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */
function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });

  children.flat().forEach((child) => {
    if (child instanceof Node) {
      return element.appendChild(child);
    }
    element.appendChild(document.createTextNode(child));
  });

  return element;
}

let count = 1;

function handleClickNumber(value) {
  count = value;
  render();
}

function handleClick(e) {
  count += 1;
  e.target.textContent = Number(e.target.innerText.slice(-2, -3));
  render();
  console.log(e.target);
}

function render() {
  const element = (
    <div id='ih'>
      <p>Hello World</p>
      <p>
        <button type='button' onClick={handleClick}>
          Click! (1)
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button type='button' onClick={() => handleClickNumber(i)}>
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
