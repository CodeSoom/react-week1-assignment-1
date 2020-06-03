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

const data = {
  count: 0,
};

function render() {
  function setState(newState) {
    Object.assign(data, newState);
    render();
  }

  function handleClick(state) {
    const newState = { ...state, ...{ count: state.count + 1 } };
    setState(newState);
  }

  function handleClickNumber(state, value) {
    const newState = { ...state, ...{ count: value } };
    setState(newState);
  }

  const element = (
    <div id="hello" className="greeting">
      <p>Remove let</p>
      <button type="button" onClick={() => handleClick(data)}>
        Click me! (
        {data.count}
        )
      </button>
      <p>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => handleClickNumber(data, i)}>{i}</button>
        ))}
      </p>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render();
