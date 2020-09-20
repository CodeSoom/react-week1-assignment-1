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

const initial = {
  count: 0,
  multiplyCount: 1,
};

function render({ count, multiplyCount }) {
  const handleClick = () => {
    render({
      multiplyCount,
      count: count + 1,
    });
  };

  const hanldeClickNumber = (value) => {
    render({
      multiplyCount,
      count: value,
    });
  };

  const handleClickMultiply = () => {
    render({
      multiplyCount: multiplyCount * 2,
      count,
    });
  };

  const element = (
    <div>
      <p id="greeting">Hello, world!</p>
      <p>
        <button type="button" onClick={handleClick}>
          Click me! (
          {count}
          )
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => hanldeClickNumber(i)}>
            {i}
          </button>
        ))}
      </p>
      <div>
        <button type="button" onClick={handleClickMultiply}>곱하기 2</button>
        <p>
          {multiplyCount}
        </p>
      </div>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render(initial);
