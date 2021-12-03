/*
  eslint-disable
  react/react-in-jsx-scope,
  react/jsx-filename-extension,
  react/jsx-one-expression-per-line,
*/

/* @jsx createElement */

function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLocaleLowerCase()] = value;
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

function getElement(id) {
  return document.getElementById(id);
}

function update(cmd, number = 0) {
  const resultElem = getElement('result');

  if (cmd === 'add') {
    resultElem.textContent = Number(resultElem.textContent) + 1;
  } else {
    resultElem.textContent = number;
  }
}

function handleClick() {
  update('add');
}

function handleClickNumber(number) {
  update('set', number);
}

function render() {
  const element = (
    <div id="hello" className="world">
      <p>Hello, React</p>
      <p>
        <button type="button" onClick={handleClick}>
          Click me! (<span id="result">0</span>)
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => handleClickNumber(i)}>
            {i}
          </button>
        ))}
      </p>
    </div>
  );

  getElement('app').textContent = '';
  getElement('app').appendChild(element);
}

render();
