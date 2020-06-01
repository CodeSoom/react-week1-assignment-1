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

function render() {
    const element = (
      <div id="hello" className="greeting">
        <p>Hello, world!</p>
        <p>
          <button type="button" onClick={handleClick}>
            Click me! (
            {counts[counts.length-1]}
            )
          </button>
        </p>
        <p>
          {[1, 2, 3].map((i) => {
            // eslint-disable-next-line no-unused-expressions
            return (
              <button type="button" onClick={() => handleClickNumber(i)}>
                  {i}
              </button>
            )
          })}
        </p>
      </div>
    );
    document.getElementById('app').textContent = '';
    document.getElementById('app').appendChild(element);
}
const counts = [0];

function handleClick() {
  console.log('Click Me!');
  counts.push(counts[counts.length-1]+1);
  render();
}
function handleClickNumber(value) {
  counts.push(value);
  render();
}


render();
