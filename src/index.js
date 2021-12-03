/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */
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

let count = 0;

function handleClick() {
  count += 1;
  render();
}

// const element = createElement("p", null, "안녕");
function render() {
  const element = (
    <div>
      <p>count : {count}</p>
      <p>
        <button type="button" onClick={handleClick}>
          Push me and then touch me til i can get my satisfaction
        </button>
      </p>
    </div>
  );
  document.getElementById("app").textContent = "";
  document.getElementById("app").appendChild(element);
}
render();
