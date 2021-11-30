/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagName, ...children) {
  const element = document.createElement(tagName);
  children.forEach((child) => element.appendChild(child));

  return element;
}

document
  .getElementById('app')
  .appendChild(
    createElement(
      'div',
      createElement(
        'p',
        document.createTextNode('Hello World'),
        document.createTextNode('Hello World'),
      ),
      createElement('p', document.createTextNode('hi')),
    ),
  );
