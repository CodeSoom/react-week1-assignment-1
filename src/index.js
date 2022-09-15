/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

const app = document.getElementById('app');

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

// 매개변수 초기값 0 세팅
function render({ count = 0 } = {}) {
  // count 값에 1씩 더하고 다시 랜더링하기
  function handleClick() {
    render({ count: count + 1 });
  }

  // 클릭해서 들어온 index를 넣어 다시 랜더링하기
  function handleClickNumber(idx) {
    render({ count: idx });
  }

  const element = (
    <div id="hello" className="greeting">
      <p>Hello, World!</p>
      <p>Hi, World!</p>
      <p>
        <button type="button" onClick={() => handleClick()}>
          click me! (
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

  app.textContent = '';
  app.appendChild(element);
}

render({ count: 0 });
