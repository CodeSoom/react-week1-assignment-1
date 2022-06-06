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

/**
 * 첫 번째 시도
 * let을 사용하지 않고 기존과 동일하게 동작하고 인수 테스트를 통과하였지만
 * 전역변수로 count를 정의한 것이 올바르지 못하다는 생각이 들었습니다.
 *
 * const count = { countingNumber: 0 };

function render() {
  function handleClick() {
    count.countingNumber += 1;
    render();
  }

  function handleClickNumber(value) {
    count.countingNumber = value;
    render();
  }
  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world</p>
      <p>
        <button type="button" onClick={handleClick}>
          Click me!
          (
          {count.countingNumber}
          )
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

render();
 *
*/

/**
 * count에 기본 값 0 을 넣은 이유
 * 처음 render함수가 호출될 때 값을 넣지 않더라도 count를 0으로 초기화하기 위함입니다.
 */
function render(count = 0) {
  // 역할 : render의 파라미터로 현재 count에 +1을 한 값으로 갱신합니다.
  function handleClick() {
    render(count + 1);
  }
  // 역할 : render의 파라미터로 매개변수로 넘어온 값을 넘겨 넘어온 값으로 갱신합니다.
  function handleClickNumber(value) {
    render(value);
  }
  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world</p>
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
          <button type="button" onClick={() => handleClickNumber(i)}>{i}</button>
        ))}
      </p>
    </div>
  );

  // 불필요한 중복 제거
  const appHandler = document.getElementById('app');
  appHandler.textContent = '';
  appHandler.appendChild(element);
}

render();
