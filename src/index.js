/* @jsx createElement */

const INIT_COUNT = 0;
const INCREASE = 1;
const BUTTON = [1, 2, 3];

function createElement(tagName, props, ...children) {
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

function render(count) {
  const handleClick = () => {
    render(count + INCREASE);
  };

  const handleClickNumberBtn = (number) => {
    render(number);
  };

  const element = (
    <div id="hello" className="greeting">
      <p>hello, Olive!</p>
      <p>
        <button type="button" onClick={handleClick}>
          Click me!(
          {count}
          )
        </button>
      </p>

      <p>
        {BUTTON.map((number) => (
          <button type="button" onClick={() => handleClickNumberBtn(number)}>
            {number}
          </button>
        ))}
      </p>
    </div>
  );

  const app = document.getElementById('app');
  app.textContent = '';
  app.appendChild(element);
}

render(INIT_COUNT);
