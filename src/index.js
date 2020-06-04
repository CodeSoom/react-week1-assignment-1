/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */
function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);
  /*
  entries 함수
  {
    id:1,
    className: 2,
  }
  => [['id',1], ['className', 2]]
  */
  Object.entries(props || {}).forEach(([key, value]) => {
    // props는 객체
    // obj => const {key, value} = array;
    // 매개변수에서 destructuring

    // dom 객체의 특징으로 props는 소문자로 들어야 한다.
    element[key.toLowerCase()] = value;
  });

  children.forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild(document.createTextNode(child));
  });

  return element;
}


let count = 0;

function handleClick() {
  count += 1;
  console.log(count);
  render();
}

function render() {
  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world</p>
      <p>
        <button type="button" onClick={handleClick}>
          click me
          {' '}
          {count}
        </button>
      </p>
    </div>
  );
  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}
render();
