/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */
function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });

  if (children.length) {
    children.forEach((child) => {
      if (child instanceof Node) {
        element.appendChild(child);
      } else {
        // TextNode일 경우
        element.appendChild(document.createTextNode(child));
      }
    });
  }

  return element;
}

// 엘리먼트
const app = document.getElementById('app');

function render(count = 0) {
  /*
    🙌 질문
    handleClick 함수가 render 함수 위에 선언될 경우 render함수가 선언되기 이전에 사용되었다는 eslint 오류가 나왔습니다.
    이 오류를 해결하기 위해서 handleClick을 render 함수 내부에서 선언했는데, 맞는 방법인지 궁금합니다.
   */
  function handleClick() {
    render(count + 1);
  }

  const container = (
    <div id="container" className="container">
      <p>
        Count:
        {count}
      </p>
      <button type="button" onClick={() => handleClick()}>
        Click me!
      </button>
    </div>
  );

  app.textContent = '';
  app.appendChild(container);
}

render();
