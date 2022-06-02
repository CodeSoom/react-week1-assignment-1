/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagname, ...children) {
  const element = document.createElement(tagname);

  children.forEach((child) => {
    element.appendChild(child);
  });

  return element;
}

//

document.getElementById('app').appendChild(
  createElement(
    'div',
    createElement(
      'p',
      ...[1, 2, 3].map((i) => (
        document.createTextNode(`Hello, world! + ${i} | `)
      )),
    ),
    createElement(
      'p',
      document.createTextNode('Hi!'),
    ),
  ),
);
