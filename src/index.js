/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  children.flat().forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }

    element.appendChild(document.createTextNode(child));
  });

  // className이 셋팅이 안된다...머지??
  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });

  return element;
}

//  머지...let을 사용하지 말라니...
// const count = {} 객체 안에서 데이터를 재할당해야 하나??
let count = 0;

function render() {
  function handleClick() {
    count += 1;
    render();
  }

  function handleClickNumber(value) {
    count = value;
    render();
  }

  const element = (
    <div id="hello" className="greeting">
      <p>Hello, World!</p>
      <p>
        <button type="button" onClick={() => handleClick()}>
          Click me!
          {count}
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => handleClickNumber(i)}>{i}</button>
        ))}
      </p>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render()