/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

const INITIAL_COUNT = 0

const createElement = (tagName, props, ...children) => {
    const element = document.createElement(tagName);

    Object.entries(props || {}).forEach(([key, value]) => {
        element[key.toLowerCase()] = value
    })

    children.flat().forEach((child) => {
        if (child instanceof Node) {
            element.appendChild(child);
            return;
        }
        element.appendChild(document.createTextNode(child));
    });

    return element;
}

const handleClick = (count) => {
    count += 1;
    render(count);
}

const handleClickNumber = (value) => {
    render(value);
}

const render = (count = 0) => {
    const element = (
        <div id="hello" className="greeting">
            <p>Hello, world!</p>
            <p>
                <button type="button" onClick={() => { count = handleClick(count) }}>
                    Click me!
                    ({ count })
                </button>
            </p>
            <p>
                {[1, 2, 3].map((i) => (
                    <button type="button" onClick={() => handleClickNumber(i)}>
                        {i}
                    </button>
                ))}
            </p>
        </div>
    );

    document.getElementById('app').textContent = '';
    document.getElementById('app').appendChild(element);
}

render(INITIAL_COUNT);