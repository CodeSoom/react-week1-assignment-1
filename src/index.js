/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

// 과제 1.
// 위의 코드에서 변수 count는 handleClick함수가 호출될 때마다 계속 변화하고 있습니다.
// 변수의 재할당 없이 문제를 해결하려면 어떻게 해야 할까요?
// let을 사용하지 않고 기존과 동일한 동작이 가능해야 합니다.
// 즉 변수에 값을 재할당 하지 않고 문제를 해결해야 합니다.

function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  // console.log(tagName, props, ...children);

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

const countInit = 0;

function render(count) {
  function handleClick() {
    render(count + 1);
  }

  function handleClickNumber(num) {
    render(num);
  }

  const element = (
    <div>
      <p id="hello" className="title">hello world</p>
      <button type="button" onClick={handleClick}>
        click!
        {count}
      </button>
      {
        [1, 2, 3].map((i) => (
          <button type="button" onClick={() => handleClickNumber(i)}>{i}</button>
        ))
      }
    </div>
  );
  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(
    element,
  );
}

render(countInit);
