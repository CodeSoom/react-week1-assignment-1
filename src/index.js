/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagName, props, ...children) {
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

function render({ count }) {
  function handleClick() {
    render({
      count: count + 1,
    });
  }

  const element = (
    <div>
      <h1>과제 1</h1>
      <p>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <button type="button" onClick={() => handleClick()}>{i}</button>
        ))}
      </p>
      <p>
        {count}
      </p>
    </div>
  );
  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render({
  count: 0,
});
