/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function render(count = 0) {
  const handleClick = (prevCount) => {
    render(prevCount + 1);
  };

  const handleClickNumber = (number) => {
    render(number);
  };

  const element = (
    <div id="hello" className="greeting">
      <p>
        <button type="button" onClick={() => handleClick(count)}>
          Click me! (
          {count}
          )
        </button>
      </p>
      <p>{[1, 2, 3].map((i) => (<button type="button" onClick={() => handleClickNumber(i)}>{i}</button>))}</p>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render();

/* eslint-disable no-unused-vars */
function createElement(tag, props, ...children) {
  const el = document.createElement(tag);

  Object.entries(props || {}).forEach(([k, v]) => {
    el[k.toLowerCase()] = v;
  });

  children.flat().forEach((child) => {
    if (child instanceof Node) {
      el.appendChild(child);
      return;
    }
    el.appendChild(document.createTextNode(child));
  });

  return el;
}
