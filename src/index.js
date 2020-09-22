/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */
function createElement(tagname, props, ...children) {
  const element = document.createElement(tagname);

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

const counting = (num) => num + 1;

function render({ count }) {
  const element = (
    <div id="hello" className="greeting">
      <p>Hello,world!</p>
      <p>
        <button type="button" onClick={() => render({ count: counting(count) })}>
          Click me!
        </button>
      </p>

      <p>
        {
          [1, 2, 3].map((v) => (
            <button type="button" onClick={() => render({ count: v })}>
              (
              {v}
              )
            </button>
          ))
        }
      </p>

      <p>
        (
        {count}
        )
      </p>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render({ count: 0 });
