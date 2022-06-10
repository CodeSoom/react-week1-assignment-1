/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

const count = {
  value: 0,
};

function handleClick() {
  count.value++;
  render();
}

function render() {
  function createElement(tagName, props, ...children) {
    const element = document.createElement(tagName);
    Object.entries(props || {}).forEach(([key, value]) => {
      if (key === 'className') {
        element[key] = value;
        return;
      }
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

  const root = (
    <div>
      <p className="description">if you press button, it counts times</p>
      <button
        id="dd"
        className="clickButton"
        type="button"
        onClick={handleClick}
      >
        you clicked
        {' '}
        {count.value}
        {' '}
        times!
      </button>
    </div>
  );
  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(root);
}

render();
