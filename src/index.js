/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

// p.innerText = "0 번째 텍스트";

function createElement(tagName, props, ...children) {
    const element = document.createElement(tagName);

    Object.entries(props || {}).forEach(([key, value]) => {
        element[key.toLowerCase()] = value; //이해안됨2 + .toLowerCase -> 펑션 소문자로 바꾸기
    });

    children.forEach((child) => {
        if (child instanceof Node) { //이해안됨1
            element.appendChild(child);
            return
        };
        element.appendChild(document.createTextNode(child));
    });

    return element
};

//let count = 0;
const count = 0;

function handleClick(click) {
    const count = click.detail;
    render();
    console.log(count);
    //count = count + 1;
};

function render() {
    const element = (
        <div id="id" className="class">
            <p> JSX 활용하기 </p>
            <p>
                <button id="td" type="button" onclick={handleClick}>
                    Click me!({count})
                </button>
            </p>
        </div>
    );

    document.getElementById("app").textContent = "";
    document.getElementById("app").appendChild(element);
};

render();