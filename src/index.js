/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

// 바벨 jsx 이용시 html태그를 추가하면 createElement를 호출하게 된다.
function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });

  // flat() => 이중배열인경우 하나의 배열로 만들어줌.
  children.flat().forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild(document.createTextNode(child));
  });

  return element;
}

// let count = 0;

function render(count) {
  function handleClick() {
    // count += 1;
    render(Number(document.getElementById('count').innerText) + 1);
  }

  function handleClickNumber(value) {
    // count = value;
    render(value);
  }

  const element = (
    <div id="hello" className="greeting">
      <p>
        <button type="button" onClick={() => handleClick()}>
          Click Me!!
          (
          <span id="count">{count || 0}</span>
          )
        </button>
      </p>
      {[1, 2, 3].map((i) => (
        <button type="button" onClick={() => handleClickNumber(i)}>
          {i}
        </button>
      ))}
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render();
