/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */
function createElement(tagName, props, ...children) {
  const paragraph = document.createElement(tagName);

  Object.entries(props || {}).forEach((item) => {
    const [key, value] = item;
    paragraph[key.toLowerCase()] = value;
  });

  children.flat().forEach((item) => {
    if (item instanceof Node) {
      paragraph.appendChild(item);
      return;
    }
    paragraph.appendChild(document.createTextNode(item));
  });

  return paragraph;
}

function render(count = 0) {
  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(
    <div id="hello" className="greeting">
      <button type="button" onClick={() => render(count + 1)}>
        Click me!
        (
        {count}
        )
      </button>
      <p>
        {[1, 2, 3].map((item) => <button type="button" onClick={() => render(item)}>{item}</button>)}
      </p>
    </div>,
  );
}

render();
