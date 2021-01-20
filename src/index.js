/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

// 아래 코드에서 변수 count는 handleClick 함수가 호출될 때마다 계속 변화하고 있음. 변수의 재할당 없이 문제를 해결해야함.

// ESLint를 돌린 결과 아무런 문제가 없어야 함.
// 모든 인수 테스트를 통과시켜야 함.
// 이 과제를 통과하려면 3개의 disable이 필요함.

// eslint config에 직접 추가하는게 아니라 index.js 상단에 추가하는것이 좋다. 프로젝트 전역에 규칙이 적용되기 때문이다.

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
// function handleClick() {
//   count += 1;
//   render();
// }

// function handleClickNumber(value) {
//   count = value;
//   render();
// }
const regex = /\d+/;

function render() {
  const element = (
    <div className="gretting">
      <p>Hello World</p>
      <p>Hello World</p>
      <p>
        <button
          id="button"
          type="button"
          onClick={() => {
            const count = parseInt(document.getElementById('button').innerHTML.match(regex), 10) + 1;
            document.getElementById('button').innerHTML = `Click me! (${count})`;
          }}
        >
          Click me! (0)
        </button>
      </p>

      <p>
        {/* {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => handleClickNumber(i)}>
            {i}
          </button>
        ))} */}

      </p>

    </div>

  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render();
