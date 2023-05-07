/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

// step1. 자바스크립트로 객체 생성하기
// const app = document.getElementById('app');
// const paragraph = document.createElement('div');
// const text = document.createTextNode('텍스트입니다');
// paragraph.appendChild(text);
// app.appendChild(paragraph);

// step2. 함수로 추상화하기
// const app = document.getElementById('app');
// const createElementFunc = (tagName, ...children) => {
//   const tag = document.createElement(tagName);
//   const paragraph = document.createTextNode(children);
//   return tag.appendChild(paragraph);
// };
// app.appendChild(createElementFunc('div', '안녕', '헬로'));

// step3. 추상화 함수에 여러가지 값을 넘겨주기
// const app = document.getElementById('app');
// const createElementFunc = (tagName, ...children) => {
//   const tag = document.createElement(tagName);
//   children.forEach((child) => {
//     // const paragraph = document.createTextNode(child);
//     tag.appendChild(child);
//   });
//   return tag;
// };
// app.appendChild(
//   createElementFunc(
//     'div',
//     document.createTextNode('하이'),
//     document.createTextNode('헬로')
//   )
// );

// step4. 한 눈에 보기
// const createElementFunc = (tagName, ...children) => {
//   const tag = document.createElement(tagName);
//   children.forEach((child) => {
//     // const paragraph = document.createTextNode(child);
//     tag.appendChild(child);
//   });
//   return tag;
// };

// document
//   .getElementById('app')
//   .appendChild(
//     createElementFunc(
//       'div',
//       createElementFunc(
//         'p',
//         document.createTextNode('hi'),
//         document.createTextNode('hello')
//       ),
//       createElementFunc('p', document.createTextNode('second hi'))
//     )
//   );

// step5. 바벨을 적용해 JSX로 만들어주기
const createElement = (tagName, props, ...children) => {
  const tag = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    tag[key.toLowerCase()] = value;
  });

  children.flat().forEach((child) => {
    if (child instanceof Node) {
      tag.appendChild(child);
      return;
    }
    tag.appendChild(document.createTextNode(child));
  });
  return tag;
};

function render({ count }) {
  function handleClickMe() {
    render({ count: count + 1 });
  }

  function handleClickNumber(number) {
    render({ count: number });
  }
  const element = (
    <div>
      <p className="hi" id="tag">
        Hi
      </p>

      <button type="button" onclick={handleClickMe}>
        Click me! {count}
      </button>
      <div>
        {[1, 2, 3].map((i) => (
          <button type="button" onclick={() => handleClickNumber(i)}>
            {i}
          </button>
        ))}
      </div>
    </div>
  );
  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render({ count: 0 });
