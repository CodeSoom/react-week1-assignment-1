/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagName, props, ...children) { // array 안에 또 array 있으면 이상하게 나옴
  const element = document.createElement(tagName);
  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });
  children.flat().forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild(document.createTextNode(child)); // 노드 안에 노드 들어가는 경우는 이상하게 나옴
  });
  return element;
}

const counter = {
	count: 0,
};

// clickCounter 구현
function handleClick() {
  counter.count += 1;
  render();
}

// clickNumber 구현
function handleClickNumber(value) {
  counter.count = value;
  render();
}

// render 함수 구현
function render() {
  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>
        <button type="button" onClick={handleClick}>
          click me! (
          {counter.count}
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

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

// 실행부
render();
