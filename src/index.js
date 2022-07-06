/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

const createElement = (tagName, props, ...children) => {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });

  children.flat().forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);

      return;
    }

    element.appendChild(document.createTextNode(child));
  });

  return element;
};

const render = ({ count }) => {
  const handleClickNumber = (value) => {
    render({ count: value });
  };

  const handleClickButton = () => {
    render({ count: count + 1 });
  };

  const element = (
    <div>
      <h1 id="title">Assignment 1 : Remove let</h1>
      <button type="button" onClick={() => handleClickButton()}>
        Click me!
        {` (${count})`}
      </button>
      <div>
        {[1, 2, 3].map((number) => (
          <button type="button" onClick={() => handleClickNumber(number)}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );

  const renderPage = () => {
    document.getElementById('app').textContent = '';
    document.getElementById('app').appendChild(element);
  };

  renderPage();
};

render({ count: 0 });
