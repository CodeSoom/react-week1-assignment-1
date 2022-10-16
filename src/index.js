/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    if (key === 'onClick') {
      element[key.toLowerCase()] = value;
      return;
    }

    element[key] = value;
  });

  children.flat().forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return element;
    }
    element.appendChild(document.createTextNode(child));
    return element;
  });

  return element;
}

function render(count = 0) {
  const handleClick = (number) => {
    render(number + 1);
  };

  const handleClickNumber = (value) => {
    render(value);
  };

  const element = (
    <div id="hello" className="greeting">
      <p>CodeSoom first assignment</p>
      <p>{count}</p>
      <p>
        <button type="button" onClick={() => handleClick(count)}>Click</button>
      </p>
      <p>
        {[1, 2, 3].map((i) => <button type="button" onClick={() => { handleClickNumber(i); }}>{i}</button>)}
      </p>
    </div>
  );

  document.querySelector('#app').textContent = '';
  document.querySelector('#app').appendChild(element);
}

render();
