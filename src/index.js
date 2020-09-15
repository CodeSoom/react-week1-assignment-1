/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

let count = 0;

function createElement(tagName, props, ...children) {
    const element = document.createElement(tagName);
    const mapPropsToAttribute = ([key, value]) => {
        element[key.toLowerCase()] = value;
    };
    const appendChild = (child) => {
        if (child instanceof Node) {
            element.appendChild(child);
            return;
        }
        element.appendChild(document.createTextNode(child));
    };

    Object.entries(props || {}).forEach(mapPropsToAttribute);

    children.forEach(appendChild);

    return element;
}

function handleClick() {
    count = count + 1;
    render();
}

function render() {
    const element = (
        <div id="hello" className="greeting">
            <p>Hello, world!</p>
            <p>
                <button type="button" onClick={handleClick}>
                    Click me!
          ({count})
        </button>
            </p>
        </div>
    );

    document.getElementById('app').textContent = '';
    document.getElementById('app').appendChild(element);
}

render();