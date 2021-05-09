/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* eslint no-console: "off" */
/* @jsx createElement */

// 1-1 과제 제출 4차 + 개인 메모용 주석 삭제

function createElement(tagName, props, ...children) {
  // console.log(tagName,props,...children)
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
}

function render({ count }) {
  function handleClickNumber(newValue) {
    render({ count: newValue });
  }

  function handleClick() {
    render({ count: count + 1 });
  }

  const element = (
    <div id="hello" className="greeting">
      <p>bable test !</p>
      <p>
        <button
          id="clickButton"
          type="button"
          onClick={handleClick}
          value={0}
        >
          Click me! (
          {count}
          )
        </button>
      </p>
      <p>
        {' '}
        {[1, 2, 3].map((newValue) => (
          <button
            type="button"
            onClick={() => { handleClickNumber(newValue); }}
          >
            {newValue}
          </button>
        ))}
      </p>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render({ count: 0 });
