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

const state = {
    count: 0,
};

function render() {
    function clickHandler() {
        state.count += 1;
        render();
    }

    function clickNumberHandler(clickedNumber) {
        state.count = clickedNumber;
        render();
    }

    const element = ( <
        div >
        <
        button type = "button"
        onClick = { clickHandler } >
        Click me!({ state.count }) <
        /button> <
        p > {
            [1, 2, 3].map(i => ( <
                button type = "button"
                onClick = {
                    () => clickNumberHandler(i) } >
                ({ i }) <
                /button>
            ))
        } <
        /p> <
        /div>
    );

    document.getElementById('app').textContent = '';
    document.getElementById('app').appendChild(element);
}

render();