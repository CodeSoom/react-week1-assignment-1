/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */

/* @jsx createElement */
const createElement = (tagName, props, ...children) => {
  const element = document.createElement(tagName);
  const childNodes = [...children].map((child) => {
    if (child instanceof Node) {
      return child;
    }
    return document.createTextNode(child);
  });
  [...childNodes].forEach((node) => element.appendChild(node));
  return element;
};

const element = (
  <div>
    <p>Hello World!</p>
    <div>
      <p>
        Hi!
      </p>
    </div>
  </div>
);

const container = document.getElementById('app');
container.appendChild(element);
