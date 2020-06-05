/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */

/* @jsx createElement */
// eslint-disable-next-line no-unused-vars
const createElement = (tagName, props, ...children) => {
  const element = document.createElement(tagName);
  const propEntries = Object.entries(props || {});
  const childNodes = [...children].flat().map((child) => {
    if (child instanceof Node) {
      return child;
    }
    return document.createTextNode(child);
  });

  propEntries.forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });
  [...childNodes].forEach((node) => element.appendChild(node));
  return element;
};

const render = (count) => {
  const element = (
    <div id="hello-world" className="greeting">
      <p>Hello World!</p>
      <div>
        <button type="button" onClick={() => render(count + 1)}>
          Click me! (
          {count}
          )
        </button>
      </div>
      <div>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => render(i)}>
            {i}
          </button>
        ))}
      </div>
    </div>
  );

  const container = document.getElementById('app');
  container.textContent = '';
  container.appendChild(element);
};

render(0);
