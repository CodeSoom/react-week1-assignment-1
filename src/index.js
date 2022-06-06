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

function handleClick(value) {
  render(value);
}

function handleClickNumber(value) {
  render(value);
}

const render = (count = 0) => {
  // 안녕하세요
  // 질문을 이렇게 주석으로 남기는게 맞는지 모르겠네요 처음에 인수를 count 로 넘기다가
  // NaN이 뜨길래 count = 0으로 바꿨더니 코드가 정상적으로 돌아가는데 count는 계속 handleClick에서 ++ 1 되는 값으로
  // 넘어오는데 count = 0으로 바뀌어서 들어오지않는 이유를 모르겠습니다..!! 계속 count 가 1이 되어야하지않나~?라는 게 저의 궁금증이에요!
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
  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
};

render();
