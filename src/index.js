/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

/**
 * JSX를 HTMLElement로 변환하는 함수
 * @param {string} tagName
 * @param {Record<string, unknown>} props
 * @param {Node | string} children
 * @return {HTMLElement}
 */
function createElement(tagName, props, ...children) {
  /** @type {HTMLElement} */
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

/**
 * count app을 새로 렌더링한다.
 * @return {void}
 */
function render({ count = 0 } = { count: 0 }) {
  function handleClickButton() {
    render({ count: count + 1 });
  }

  function handleClickNumber(number) {
    render({ count: number });
  }

  /** @type {HTMLElement} */
  const element = (
    <section id="hello" className="greeting">
      <h1>Hello, world!</h1>
      <button type="button" onClick={handleClickButton}>
        Click me! ({count})
      </button>
      <p>
        {[1, 2, 3].map((number) => (
          <button type="button" onClick={() => handleClickNumber(number)}>
            {number}
          </button>
        ))}
      </p>
    </section>
  );
  const app = document.getElementById('app');
  app.textContent = '';
  app.appendChild(element);
}

render({ count: 0 });
