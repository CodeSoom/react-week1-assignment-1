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

function counter(count = 0) {

  function handleClickCounter() {
    count += 1;
    render();
  }

  function handleClickNumber(number) {
    count = number;
    render();
  }

  function countElement() {
    return (
      <div id="hello" className="greeting">
        <p>Hello, world!</p>
        <p>
          <button type="button" onClick={handleClickCounter}>
            Click me! (
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

  function render() {
    const app = document.getElementById('app');
    app.textContent = '';
    app.appendChild(countElement());
  }

  render();
}

counter();
