/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(name, props, ...children) {
  const elem = document.createElement(name);

  Object.entries(props || {}).forEach(([key, value]) => {
    elem[key.toLowerCase()] = value;
  });

  children.forEach((child) => {
    if (child instanceof Node) {
      elem.appendChild(child);
      return;
    }
    elem.appendChild(document.createTextNode(child));
  });
  return elem;
}

localStorage.setItem('count', '0');

function handleClick() {
  if (!localStorage.getItem('count')) {
    localStorage.setItem('count', '0');
  }
  localStorage.setItem('count', `${parseInt(localStorage.getItem('count'), 10) + 1}`);
}

function render() {
  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>
        <button
          type="button"
          onClick={() => {
            handleClick();
            render();
          }}
        >
          Click me!
          (
          {localStorage.getItem('count')}
          )
        </button>
      </p>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render();
