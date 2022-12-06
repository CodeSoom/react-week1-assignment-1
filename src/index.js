/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */
/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */
const createElement = (tagName, props, ...children) => {
    const element = document.createElement(tagName);

    Object.entries(props || {}).forEach(([key, value]) => {
        element[key.toLocaleLowerCase()] = value;
    });

    children.flat().forEach(child => {
        if (child instanceof Node) {
            element.appendChild(child);
            return;
        }
        element.appendChild(document.createTextNode(child));
    });

    return element;
};

let count = 0;

function clickHandler() {
    count += 1;
    render();
}

function clickNumberHandler(clickedNumber) {
    count = clickedNumber;
    render();
}

function render() {
    const element = ( <
        div >
        <
        button type = "button"
        onClick = { clickHandler } >
        클릭!{ count } { ' ' } <
        /button>{' '} <
        p > { ' ' } {
            [1, 2, 3].map(i => ( <
                button type = "button"
                onClick = {
                    () => clickNumberHandler(i) } > { ' ' } { i } { ' ' } <
                /button>
            ))
        } { ' ' } <
        /p>{' '} <
        /div>
    );

    document.getElementById('app').textContent = '';
    document.getElementById('app').appendChild(element);
}

render();