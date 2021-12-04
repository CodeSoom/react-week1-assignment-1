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
  const app = document.getElementById('app');
  if (!app) {
    return;
  }
  app.textContent = '';
  app.appendChild(child);
};

const component = (count = 0) => {
  const clickHandler = (number) => {
    render(component(number));
  };

  return (
    <div>
      <button type="button" onClick={() => clickHandler(count + 1)}>
        Click me!
        (
        {count}
        )
      </button>
      <p>
        {[1, 2, 3].map((number) => (
          <button type="button" onClick={() => clickHandler(number)}>
            {number}
          </button>
        ))}
      </p>
    </div>
  );
};

render(component());
