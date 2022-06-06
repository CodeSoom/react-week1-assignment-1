/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* eslint-disable react/jsx-indent, no-use-before-define */
/* @jsx createElement */
function createElement(tagName, props, ...children) {
    const element = document.createElement(tagName);

    Object.entries(props || {}).forEach(([key, value]) => {
        element[key.toLocaleLowerCase()] = value;
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

function handleClick(count) {
    render(count + 1);
}

function handleClickNumber(value) {
    render(value);
}

// render 호출 시점의 count로 클릭시 연산 수행하도록 변경.
function render(count) {
    const element = (
        <div id="hello" className="greeting">
            <p>Hello, world!</p>
            <p>
                <button type="button" onClick={() => handleClick(count)}>
                    Click me!
                    (
                        {count}
                    )
                </button>
            </p>
            <p>
                {
                    [1, 2, 3].map((i) => (
                        <button type="button" onClick={() => handleClickNumber(i)}>{i}</button>
                    ))
                }
            </p>
        </div>
    );

    document.getElementById('app').textContent = '';
    document.getElementById('app').appendChild(element);
}

// 최초 랜더링시 default count = 0으로 설정.
render(0);
