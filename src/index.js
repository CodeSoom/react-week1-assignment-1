/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

const app = document.getElementById('app');

function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);//해당 태그 생성
  Object.entries(props || {}).map(([key, value]) => {
    element[key.toLowerCase()] = value;
  })
  children.forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild(document.createTextNode(child));
  });
  return element;
}

function render(value) {

  function handleClick() {
    render(value + 1);
  }

  const element = (
    <div>
      <p>count : {value}</p>
      <p>
        <button type="button" onClick={handleClick}>
          Push me and then touch me til i can get my satisfaction
        </button>
      </p>
    </div>
  );

  app.textContent = "";
  app.appendChild(element);
}
render(0);
