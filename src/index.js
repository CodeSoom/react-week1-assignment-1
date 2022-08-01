/* eslint-enable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagName, props, ...children) {
    const element = document.createElement(tagName);

    Object.entries(props || {}).forEach(([key, value]) => {
        element[key.toLowerCase()] = value;
    })

    children.forEach((child) => {
        if (child instanceof Node) {
            element.appendChild(child);
            return;
        }
        element.appendChild(document.createTextNode(child));
    })

    return element;
}

function handleClick(count = 1) {    
    render(count);
}

function render(prvCount = 1) {
    const element = (
        <div id="hello" className="greeting">
        <p>Hello, world!</p>
        <p>
            <button type="button" onClick={() => handleClick(prvCount + 1)}>
            Click me!
            ({prvCount})
            </button>
        </p>
        </div>
    );

    document.getElementById('app').textContent = '';
    document.getElementById('app').appendChild(element);
}

render();
