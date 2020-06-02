/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */

/* @jsx createElement */
const createElement = (tagName, props, ...children) => {
  const element = document.createElement(tagName);
  const propEntries = Object.entries(props || {});
  const childNodes = [...children].map((child) => {
    if (child instanceof Node) {
      return child;
    }
    return document.createTextNode(child);
  });

  propEntries.forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });
  [...childNodes].forEach((node) => element.appendChild(node));
  return element;
};

const onClick = () => {
  console.log('onClick');
};

const element = (
  <div id="hello-world" className="greeting">
    <p>Hello World!</p>
    <button type="button" onClick={onClick}>
      Click, me!
    </button>
  </div>
);

const container = document.getElementById('app');
container.appendChild(element);
