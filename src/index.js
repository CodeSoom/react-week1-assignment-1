/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */

/* @jsx createElement */
function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);
  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLocaleLowerCase()] = value;
  });

  children.flat().forEach((child) => {
    const childNode = child instanceof Node ? child : document.createTextNode(child);
    element.appendChild(childNode);
  });

  return element;
}

const render = (child) => {
  const App = document.getElementById('app');
  if (!App) {
    return;
  }
  App.textContent = '';
  App.appendChild(child);
};

const clickHandler = (html) => {
  render(html);
};

const component = (count = 0) => (
  <div>
    <button type="button" onClick={() => clickHandler(component(count + 1))}>
      Click me!
      (
      {count}
      )
    </button>
    <p>
      {[1, 2, 3].map((i) => (
        <button type="button" onClick={() => clickHandler(component(i))}>
          {i}
        </button>
      ))}
    </p>
  </div>
);

render(component());
