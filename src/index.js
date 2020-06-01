/* @jsx createElement */
// eslint-disable-next-line no-unused-vars
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
const count = 0;

function handleClick(value) {
  console.log('Click Me!');
  render(value + 1);
}
function handleClickNumber(value) {
    render(value);
}

function render(value) {
  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>
        <button type="button" onClick={() => { handleClick(value);  }}>
          Click me! (
          {value}
          )
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => { handleClickNumber(i);}}>
            {i}
          </button>
        ))}
      </p>
    </div>
  );
  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}
render(count);
