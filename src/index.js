/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */

/* @jsx createElement */
let count = 0;

function handleClick() {
  count += 1;
  render();
}

function render() {
  const element = (
    <div id="hello" className="greeting">
      <p>
        <button type="button" onClick={handleClick}>
          Click me! (
          {count}
          )
        </button>
      </p>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render();

function createElement(tag, props, ...children) {
  const el = document.createElement(tag);

  Object.entries(props || {}).forEach(([k, v]) => {
    el[k.toLowerCase()] = v;
  });

  children.forEach((child) => {
    if (child instanceof Node) {
      el.appendChild(child);
      return;
    }
    el.appendChild(document.createTextNode(child));
  });

  return el;
}
