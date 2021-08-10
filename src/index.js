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

// let은 변수로 재할당이 일어난다.
// 이를 해결해주기 위해 const 를 사용해보자
// 근데 const는 상수인데...
// const count = 0;

// function handleClick(value) {
//   count += value;
//   render();
// }

function render(count = 0) {
  const handleClick = () => {
    console.log(count);
    render((count += 1));
  };

  const element = (
    <div id="hello" className="greeting">
      <p>Hello world</p>
      <p>Hi!</p>

      <p>
        <button type="button" onClick={handleClick}>
          Click(
          {count})
        </button>
      </p>
    </div>
  );

  document.getElementById("app").textContent = "";
  document.getElementById("app").appendChild(element);
}

render();
