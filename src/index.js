/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */
const createElement = (tagName, props, ...children) => {
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
};

(function render(count = 0) {
  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(
    <div id="wrapper" className="greeting hello">
      123123
      <p className="description">Hello, world!</p>
      <button type="button" onClick={() => render((count += 1))}>
        Click me! (
        {count}
        )
      </button>
      <div>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => render(i)}>
            {i}
          </button>
        ))}
      </div>
    </div>,
  );
}());
