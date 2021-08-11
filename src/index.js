/* eslint-disable no-param-reassign */
/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagName, props, ...childrend) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });

  childrend.flat().forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild(document.createTextNode(child));
  });

  return element;
}

function render(element, container) {
  container.textContent = '';
  container.appendChild(element);
}

const CountElement = (count) => {
  function rerender(nextCount) {
    return render(CountElement(nextCount), document.getElementById('app'));
  }

  return (
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>
        <button type="button" onClick={() => rerender(count + 1)}>
          Click me!
          (
          {count}
          )
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => rerender(i)}>
            {i}
          </button>
        ))}
      </p>
    </div>
  );
};

render(CountElement(0), document.getElementById('app'));
