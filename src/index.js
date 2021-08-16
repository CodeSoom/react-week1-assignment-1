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

const initialState = { count: 0 };

function render({ count }) {
  function handleClickButton(newCount) {
    return () => render({ count: newCount });
  }

  const app = document.getElementById('app');

  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>
        <button type="button" onClick={handleClickButton(count + 1)}>
          Click me!
          (
          {count}
          )
        </button>
        <p>
          {[1, 2, 3].map((i) => (<button type="button" onClick={handleClickButton(i)}>{i}</button>))}
        </p>
      </p>
    </div>
  );

  app.textContent = '';
  app.appendChild(element);
}

render(initialState);
