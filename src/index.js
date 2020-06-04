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
    element[key] = value;
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
const element = (
  <div id="hello" className="greeting">
    <p>Hello, world</p>
  </div>
);
document.getElementById('app').appendChild(element);
