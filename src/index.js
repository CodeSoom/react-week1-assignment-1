function createElement(tagName, ...children) {
    const element = document.createElement(tagName);

    children.forEach((child) => {
        element.appendChild(child);
    });
    return element;
}

const paragraph1 = createElement(
    'p', 
    document.createTextNode('Hello, future1!'),
    document.createTextNode('Hello, future2!')
);

const paragraph2 = createElement(
    'p',
    ...[1, 2, 3].map((i) => ( 
    document.createTextNode(`Hello, Hi! ${i} | `)
    ))
);

const root = createElement(
    'div',
    paragraph1,
    paragraph2
);

const container = document.getElementById('app');

container.appendChild(paragraph1);
container.appendChild(paragraph2);
