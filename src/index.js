/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

// 1-1 과제 제출 1차
const data = { count: 0 }; 

function handleClick() {
    console.log(data);
    data.count += 1;
    console.log(`${data.count} times clicked`);
    render();
}

function handleClickNumber(value) {
    data.count = value;
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
            <button id="clickButton" type="button" onClick={handleClick} value={0}>
            Click me! (
            {data.count}
            )
            </button>
        </p>
        <p> {[1, 2, 3].map((i) => (
                <button type="button" onClick={() => { handleClickNumber(i); }}>{i}</button>
            ))}
        </p>
    </div>
    );

  document.getElementById('app').textContent = ''; // 랜더시 초기화 (빈값으로 초기화)
  document.getElementById('app').appendChild(element); // app 이라 선언된 공간에 컴포넌트 추가.
}

render();
