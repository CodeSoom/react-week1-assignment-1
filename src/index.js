/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

// 함수 생성
function creatElement(tagName, ...children) {
    const element = document.creatElement(tagName);

    children.forEach((child) => {
        element.appendChild(child);
    });

    return element;
}

// 실행문
document.getElementById('app').appendChild( 
    creatElement(
        'div',
        creatElement(
            'p',
            ...[1, 2, 3].map((i) =>(
                document.createTextNode('Hellow, world!'+ i + '|')
            ))
        ),
        creatElement(
            'p',
            document.createTextNode('Hi!'),
        ),
    ),
),