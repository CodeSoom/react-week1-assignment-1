/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */
let count = 0;

function handleClick() {
    count += 1;
    console.log(`${count} times clicked`);
    render();
}

function handleClickNumber(value) {
    count = value;
    render();
}
function createElement(tagName, props, ...children) {
  // console.log(tagName,props,...children)

const element = document.createElement(tagName);
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
function render() {

const element = (
    <div id="hello" className="greeting">
    <p>bable test !</p>
    <p>
        <button type="button" onClick={handleClick} count={0}>
        click me ! (
        {count}
        )
        {' '}
        </button>
    </p>
    <p>
        {
            [1, 2, 3].map((i) => (
                <button type="button" onClick={() => { handleClickNumber(i); }}>{i}</button>
            ))
        }
    </p>
    </div>
);

  document.getElementById('app').textContent = ''; // 랜더시 초기화 (빈값으로 초기화)
  document.getElementById('app').appendChild(element); // app 이라 선언된 공간에 컴포넌트 추가.
}

render();
