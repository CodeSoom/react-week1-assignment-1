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

function clickCount(value) {
  const value2 = parseInt(value, 10) + 1;
  document.getElementById('button').innerText = `click Me ${value2}`;
  document.getElementById('button').value = value2;
}

function handlerClick(valueI) {
  document.getElementById('button').innerText = `click Me ${valueI}`;
  document.getElementById('button').value = valueI;
}

function render() {
  const element = (
    <div id="hello" className="greeting">
      <p>hello World</p>
      <p>
        <button
          id="button"
          type="button"
          value="0"
          onClick={() => clickCount(document.getElementById('button').value)}
        >
          click Me 0
        </button>
        {/* <input style={{ display: 'none' }} id="dataSaver" value="0" /> */}
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => handlerClick(i)}>
            {i}
          </button>
        ))}
      </p>
    </div>
  );

  //   document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render();
