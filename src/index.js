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

function render(count = 0) { // count를 render의 매개변수로 넣어준다.
  // 초기값을 넣어주지않으면 0이아닌 undefined이기때문에 아무런 연산이 불가능하다.
  const handleClick = () => { // handleClick 을 호출할때마다 render함수의 매개변수인 count 에 1을 더해준다.
    render(count + 1);
  };
  const handleClickNumber = (number) => { // number로 배열안에 값을 받아온다.
    render(number); // 렌더함수의 카운트 값이 number 값으로 바뀌게된다.
  };

  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>
        <button type="button" onClick={handleClick}>
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

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render();
