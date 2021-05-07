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

const render = (state = 0) => {
  const handleClick = (count) => {
    render(count);
  };

  const element = (
    <div id="hello" className="greeting">
      <p>
        <span>Hello World!</span>
      </p>
      <p>
        <button type="button" onClick={() => handleClick(state + 1)}>
          Click me!!
          (
          {state}
          )
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (<p>{i}</p>))}
      </p>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
};

render();
