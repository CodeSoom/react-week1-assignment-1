/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */
function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });

  children.forEach(child => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild(document.createTextNode(child));
  });

  return element;
}

createElement();

// let은 변수로 재할당이 일어난다.
// 이를 해결해주기 위해 const 를 사용해보자
// 근데 const는 상수인데...
// const count = 0;

// function handleClick(value) {
//   count += value;
//   render();
// }

// count 를 객체화 시켜 변화에 자유롭도록 해준다.

function render({ count }) {
  function handleClick() {
    render({ count: count + 1 });
  }

  function handleClickNumber(value) {
    render({ count: value });
  }

  const element = (
    <div id="hello" className="greeting">
      <p>Hello world</p>
      <p>
        <button type="button" onClick={() => handleClick()}>
          Click me! ({count})
        </button>
      </p>
    </div>
  );

  const app = document.getElementById("app");
  app.textContent = "";
  app.appendChild(element);
}

render({
  count: 0
});
