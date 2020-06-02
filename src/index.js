/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */

/* @jsx createElement */
function createElement(tags, props, ...children) {
  const element = document.createElement(tags);

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

function render({ number = 0 }) {
  const element = (
    <div id="hello">
      <p className="haha">헬로우</p>
      <p>
        <button type="button" onClick={() => { render({ number: number + 1 }); }}>
          Click me!(
          {number}
          )
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => { render({ number: i }); }}>
            {i}
          </button>
        ))}
      </p>
    </div>
  );

  document.querySelector('#app').textContent = '';
  document.querySelector('#app').appendChild(createElement('div', null, element));
}

render({ number: 0 });
