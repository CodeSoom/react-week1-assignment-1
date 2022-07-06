/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

// 함수 생성
function createElement(tagName, props, ...children) {

    const element = document.createElement(tagName);

    Object.entries(props || {}).forEach(([key, value]) => {
        element[key.toLowerCase()] = value;
    });

    children.flat().forEach((child) => {
        if(child instanceof Node){
            element.appendChild(child);
            return;
        }
        element.appendChild(document.createTextNode(child));
    });

    return element; // 엘리먼트 리턴
};

let count = 0; // 카운트 변수

function handleClick() {
    console.log('click!');
    count += 1;
    console.log(count);
    render();
}

function handleClickNumber(value){
    count = value;
    render();
}

function render() {
    const element = (
        <div id="hellow" className="greeting">
            <p>Hellow,  world</p>
            <p>Hi</p>
            <p>
                <button tyle="button" onClick={() =>handleClick()}>
                    Click me! ({count})
                </button>
            </p>
            <p>
                {[1, 2, 3].map((i) =>(
                    <button type="button" onClick={() => handleClickNumber(i)}>
                        {i}
                    </button>
                ))};
            </p>
        </div>
    );

    // 실행문 
    document.getElementById('app').textContent = '';
    document.getElementById('app').appendChild(element);
}

render();