/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */


function createElement(tagName, props, ...children) {
  console.log(children)
  const element = document.createElement(tagName);

  // props가 없는 null 이면 {}로서 처리
  Object.entries(props || {}).forEach(([key, value]) => {
    // DOM의 속성은 소문자 처리
    element[key.toLowerCase()] = value;
  });

  children.flat().forEach((child) => {
    //텍스트가 아니라 노드면
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    } else element.appendChild(document.createTextNode(child));
  });

  return element;
}

let count = 0;

function onClickHandle(i) {
  count = i;
  render();
}

function handleClick() {
  count += 1; 
  render();
}

function render() {
  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>
        <button type="button" onClick={handleClick}>
          click me!
          (
            {count}
          )
        </button>
      </p>
      <p>
        {[1,2,3].map((i)=> (
          <button type="button" onClick={() => onClickHandle(i)}>{i}</button>
        ))}
      </p>
    </div>
  );
  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render();
