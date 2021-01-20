/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* eslint-disable react/jsx-one-expression-per-line */
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
function render(count) {
  function handleClick() {
    return render(count + 1);
  }
  function handleClickNumber(currentCount, nextCount) {
    return () => {
      if (currentCount === nextCount) {
        return;
      }

      render(nextCount);
    };
  }

  const element = (
    <div id="hello" className="gree">
      <p>헬로월드</p>
      <p>
        <button type="button" onClick={handleClick}>
          Click me! ({count})
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={handleClickNumber(count, i)}>
            {i}
          </button>
        ))}
      </p>
    </div>
  );
  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render(0);
