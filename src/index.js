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

const rootElement = document.getElementById('app');

function render(count = 0) {
  function onClickCount() {
    return render(count + 1);
  }

  function onClickNumber(num) {
    return render(num);
  }

  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>
        <button type="button" onClick={onClickCount}>
          Click me! (
          {count}
          )
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => onClickNumber(i)}>
            {i}
          </button>
        ))}
      </p>
    </div>
  );

  rootElement.textContent = '';
  rootElement.appendChild(element);
}

render(0);
