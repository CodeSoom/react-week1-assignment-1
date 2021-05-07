/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* eslint no-console: "off" */
/* @jsx createElement */

//  공부 메모
// eslint console.log 사용금지에 대하여 : https://eslint.org/docs/rules/no-console.html
// 원인 :  일반적으로 사용 console중인 통화 는 프로덕션으로 푸시되기 전에 제거되어야합니다.

// .js 파일에서 eslint rull 추가하는 법

// 1-1 과제 제출 1차
const data = { count: 0 };

// function handleClick() {
//   console.log(data);
//   data.count += 1;
//   console.log(`${data.count} times clicked`);
//   render();
// }

function createElement(tagName, props, ...children) {
  // console.log(tagName,props,...children)
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

function render() {
  const element = (
    <div id="hello" className="greeting">
      <p>bable test !</p>
      <p>
        <button
          id="clickButton"
          type="button"
          onClick={() => {
            data.count += 1;
            console.log(`${data.count} times clicked`);
            render();
          }}
          value={0}
        >
          Click me! (
          {data.count}
          )
        </button>
      </p>
      <p>
        {' '}
        {[1, 2, 3].map((resetVal) => (
          <button
            type="button"
            onClick={() => {
              data.count = resetVal;
              render();
            }}
          >
            {resetVal}
          </button>
        ))}
      </p>
    </div>
  );

  document.getElementById('app').textContent = ''; // 랜더시 초기화 (빈값으로 초기화)
  document.getElementById('app').appendChild(element); // app 이라 선언된 공간에 컴포넌트 추가.
}

render();
