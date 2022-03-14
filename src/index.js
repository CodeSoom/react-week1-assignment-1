/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function render(count = 0) {
  function handleClick(value) {
    const newValue = value + 1;

    render(newValue);
  }

  function handleClickNumber(value) {
    const newValue = value;

    render(newValue);
  }

  const element = (
    <div id="hello" className="greetoing">
      <p>
        <button type="button" onClick={() => handleClick(count)}>
          Click me!
          (
          {count}
          )
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => handleClickNumber(i)}>
            <p>{i}</p>
          </button>
        ))}
      </p>
    </div>
  );

  document.getElementById('app').textContent = '';

  document
    .getElementById('app')
    .appendChild(element);
}

function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLocaleLowerCase()] = value;
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

render();
