/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

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

function app1Render() {
  const root = (
    <div>
      <p className="description">if you press button, it counts times</p>
    </div>
  );
  document.getElementById('app1').textContent = '';
  document.getElementById('app1').appendChild(root);


function app2Render(count = 0) {
  const root = (
    <button
      className="clickButton"
      type="button"
      onClick={() => {
        app2Render(+count + 1);
      }}
    >
      Click me!
      {' '}
      (
      {count}
      )
      {' '}
    </button>
  );

  document.getElementById('app2').textContent = '';
  document.getElementById('app2').appendChild(root);
}

function app3Render() {
  const root = (
    <p>
      {['1', '2', '3', '4'].map((i) => (
        <button
          type="button"
          onClick={() => {
            app2Render(i);
          }}
        >
          {i}
        </button>
      ))}
    </p>
  );

  document.getElementById('app3').textContent = '';
  document.getElementById('app3').appendChild(root);
}

app1Render();
app2Render(0);
app3Render();
