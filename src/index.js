/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

const createElement = (tagName, ...children) => {
  const element = document.createElement(tagName);
  console.log(children);
  console.log('--------------------------');
  children.forEach((child) => {
    console.log(child);
    element.appendChild(child);
  });
  console.log('--------------------------');
  console.log(element);
  return element;
};

document
  .getElementById('app')
  .appendChild(
    createElement(
      'div',
      ...[1, 2, 3].map((i) => document.createTextNode(`Hello, world!${i} `)),
      createElement('p', document.createTextNode('Hello, world!!!!\n'), document.createTextNode('Hi!!! \n')),
      createElement('p', document.createTextNode('Hi!!!!!!!!!!!!\n'), document.createTextNode('Hi22222222!!! \n')),
    ),
  );
