/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* eslint no-console: "off" */
/* @jsx createElement */

//  공부 메모
// eslint console.log 사용금지에 대하여 : https://eslint.org/docs/rules/no-console.html
// 원인 :  일반적으로 사용 console중인 통화 는 프로덕션으로 푸시되기 전에 제거되어야합니다.

// 1-1 과제 제출 4차
/** 피드백 메모 & 생각정리 & 목표
 *
 * 1) count값을 객체로 관리한다고 해서 재할당이 불가능한 것은 아니다.
 *    => count 값에 접근할 수 있는 자격을 가진자를 별도로 분리해야 할것 같다
 *
 *    ==> 다른 분들의 코드나, 과제 해설을 보기 전까지는 render()안에 파라미터로 count를 넘겨줘서 해결할 수 있다는 생각을 하지 못했다 (ㅠㅠ)
 *
 *    ===>  아샬님 강의 내용에서 : (왜 let을 사용하지 않고 render()함수에 파라미터로 count를 처리하는가 ?)
 *         '당연히 무언가 상태를 바꾼다는 것은 다시 그린다는 것'
 *         'count를 변경하는 곳마다 render()를 다시 호출해야하는' 불편함 & 휴먼 에러 포인트가 있기에 render()에서 하나로 묶어 처리하는 것
 *
 *    ===> 과제 해설 강의를 본 후 생각 : count값이 변경된다는 것은 '결과적으로' 버튼 텍스트 값을 다시 그리는 일이다.
 *       그러므로 count값을 제어하는 주체는 render()함수인것 같다.
 *
 * 2) onClick 구현시 별도의 핸들러 함수를 만들어 사용하자 (완료)
 *    =>  기존 handler함수 구현에서 render 호출시 'use-before-define' EeLint 오류가 있음
 *    => handler 함수를 별도 구현 하면서, use-before-define 해결도 할 수 있는 방법을 찾아야함 : 함수안에 함수를 선언함.
 *
 * 3) 변수명에 명확하게 의도를 담을 것 (완료)
 *    =>  resetVal 수정하기 : 수정 완료
 */

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

function render({ count }) {
  function handleClickNumber(newValue) {
    render({ count: newValue });
  }

  function handleClick() {
    render({ count: count + 1 });
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
          {count}
          )
        </button>
      </p>
      <p>
        {' '}
        {[1, 2, 3].map((newValue) => (
          <button
            type="button"
            onClick={() => { handleClickNumber(newValue); }}
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

render({ count: 0 });
