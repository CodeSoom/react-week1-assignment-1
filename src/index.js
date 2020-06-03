/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */

/* @jsx createElement */
function createElement(tagName, props, ...children) { // eslint-disable-line no-unused-vars
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

const state = {
  count: 0,
};

function render() {
  function handleClick(data) {
    Object.assign(state, data);
    render();
  }

  function handleClickNumber(value) {
    Object.assign(state, value);
    render();
  }

  const element = (
    <div id="hello" className="greeting">
      <p>Remove let</p>
      <button type="button" onClick={() => handleClick({ count: state.count + 1 })}>
        Click me! (
        {state.count}
        )
      </button>
      <p>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => handleClickNumber({ count: i })}>{i}</button>
        ))}
      </p>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render();
