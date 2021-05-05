/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagName, props = {}, ...children) {
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

function render(valueRender) {
  const element = (
    <div id="hello" className="greeting">
      <p>hello World</p>
      <p>
        <button
          id="button"
          type="button"
          onClick={() => render(`Click me! (${parseInt((document.getElementById('button').innerText.split(' ')[2]).split('').slice(1, -1), 10) + 1})`)}
        >
          {valueRender}
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => render(`Click me! (${i})`)}>
            {i}
          </button>
        ))}
      </p>
    </div>
  );
  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}
render('Click me! (0)');
