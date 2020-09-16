/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */


const createElement = (tagName, ...children) => {
    const element = document.createElement(tagName);

    children.forEach((child) => {
        element.appendChild(child);
    });

    return element;
}


const root = createElement(
    'div',
    createElement(
        'p',
        ...[1, 2, 3].map(i => (
            document.createTextNode(`Hello, world! ${i} | `)
        ))
    ),
    createElement(
        'p',
        document.createTextNode('Hi, dongjo!'),
        document.createTextNode('Hi, dongjo!!')
    ),
);
document.getElementById('app').appendChild(root)