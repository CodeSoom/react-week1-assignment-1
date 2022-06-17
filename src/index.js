/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

// 미션 1. eslint 통과 -> 'render' was used before it was defined. 안 뜨게 하기.
// 미션 2. let을 써서 count 값을 재할당 하지 마라.

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

const render = (count = 0) => {
  function handleClick(value) {
    render(value);
  }

  function handleClickNumber(value) {
    render(value);
  }

  const element = (
    <div id="hello" className="greeting">
      <p>Hello, React!</p>
      <p>
        <button type="button" onClick={() => { handleClick(count + 1); }}>
          Click me!
          (
          {count}
          )
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
  const container = document.getElementById('app');
  container.textContent = '';
  container.appendChild(element);
};

render();
