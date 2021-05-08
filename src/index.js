/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* eslint no-console: "off" */
/* @jsx createElement */

//  공부 메모
// eslint console.log 사용금지에 대하여 : https://eslint.org/docs/rules/no-console.html
// 원인 :  일반적으로 사용 console중인 통화 는 프로덕션으로 푸시되기 전에 제거되어야합니다.

// 1-1 과제 제출 2차
/** 피드백 메모 & 생각정리 & 목표
 *
 * 1) count값을 객체로 관리한다고 해서 재할당이 불가능한 것은 아니다.
 *    => count 값에 접근할 수 있는 자격을 가진자를 별도로 분리해야 할것 같다 : 그런데 아직 어떻게 해결해야 할지 잘 모르겠음
 *
 *
 * 2) onClick 구현시 별도의 핸들러 함수를 만들어 사용하자 (완료)
 *    =>  기존 handler함수 구현에서 render 호출시 'use-before-define' EeLint 오류가 있음
 *    => handler 함수를 별도 구현 하면서, use-before-define 해결도 할 수 있는 방법을 찾아야함 : 함수안에 함수를 선언함.
 *
 * 3) 변수명에 명확하게 의도를 담을 것 (완료)
 *    =>  resetVal 수정하기 : 수정 완료  
 */
const data = { count: 0 };

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
  function handleClickNumber(newValue) {
    return () => {
      data.count = newValue;
      render();
    };
  }

  function handleClick() {
    data.count += 1;
    console.log(`${data.count} times clicked`);
    render(data.count);
  }

  const element = (
    <div id="hello" className="greeting">
      <p>bable test !</p>
      <p>
        <button
          id="clickButton"
          type="button"
          onClick={handleClick}
          value={0}
        >
          Click me! (
          {data.count}
          )
        </button>
      </p>
      <p>
        {' '}
        {[1, 2, 3].map((newValue) => (
          <button
            type="button"
            onClick={handleClickNumber(newValue)}
          >
            {newValue}
          </button>
        ))}
      </p>
    </div>
  );

  document.getElementById('app').textContent = ''; // 랜더시 초기화 (빈값으로 초기화)
  document.getElementById('app').appendChild(element); // app 이라 선언된 공간에 컴포넌트 추가.
}

render(0);
