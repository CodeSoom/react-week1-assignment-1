/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */
function createElement(tagName, props, ...children) {
  console.log(children);
  const element = document.createElement(tagName);

  // props가 null일 경우가 있는데 그럴 땐 {}로 대체합니다
  Object.entries(props || {}).forEach(([key, value]) => {
    // onClick 같은 걸 받아서 onclick으로 변환
    element[key.toLowerCase()] = value;
  });

  // NOTE: flat은 [1,[2,3]] => [1,2,3]으로 바꿔줍니다. {[1,2,3].map(i => (<p>{i}</p>))}를 하게 되면
  // NOTE: [[p,p,p]] 이렇게 오기 때문에 flat을 사용합니다.
  children.flat().forEach((child) => {
    // NOTE: 바벨에서 처리해서 보낼 때
    // NOTE: children에 text면 text 노드가 아니라 그냥 text가 들어오고
    // NOTE: children에 요소 노드면 요소 노드가 들어옵니다.
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }

    // NOTE: <button>Click ME!</button> 에서 Click Me를 의미합니다.
    element.appendChild(document.createTextNode(child));
  });

  return element;
}

let count = 0;

const handleClick = () => {
  console.log('click!');
  count += 1;
  console.log(count); // count가 1씩 증가
  render();
};

const render = () => {
// babel에 의해서 className으로 넣어줘도 알아서 class로 먹는 모습을 볼 수 있습니다.
  const element = (
    <div id="hello" className="greeting">
      <p>
        <span>Hello World!</span>
      </p>
      <p>
        <button type="button" onClick={handleClick}>
          Click me!!
          (
          {count}
          )
        </button>
      </p>
      <p>
        {/* NOTE: 이렇게 하게 되면 [[p,p,p]] 로 children 매개변수로 들어가게 됩니다. */}
        {[1, 2, 3].map((i) => (<p>{i}</p>))}
      </p>
    </div>
  );

  // NOTE: app 아래에 있던 dom을 지우고 새로운 돔을 넣어야 됩니다.
  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
};

render();