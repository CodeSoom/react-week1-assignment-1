/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
    //props로 잡은 애들을 쓸 수 있게 됨
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

//

function handleClick(value) {
  value += 1;
  render(value);
}

function handleClickNumber(count, value) {
  count = value;
  render(count);
}

function render(resultValue) {
  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(
    <div id='hello' className='greeting'>
      <p>Hello, world!</p>
      <p>
        <button type='button' onClick={() => handleClick(resultValue)}>
          Click me! ({resultValue})
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button
            type='button'
            onClick={() => handleClickNumber(resultValue, i)}
          >
            {i}
          </button>
        ))}
      </p>
    </div>
  );
}

render(0);
