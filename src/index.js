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
function render(initialState = { count: 0 }) {
  const state = { count: 0, ...initialState };

  function setState(newState) {
    render({ ...state, ...newState });
  }

  function increaseCount() {
    setState({ count: state.count + 1 });
  }

  function updateCount(count) {
    setState({ count });
  }

  /** @type {HTMLElement} */
  const element = (
    <section id="hello" className="greeting">
      <h1>Hello, world!</h1>
      <button type="button" onClick={increaseCount}>
        Click me! ({state.count})
      </button>
      <p>
        {[1, 2, 3].map((number) => (
          <button type="button" onClick={() => updateCount(number)}>
            {number}
          </button>
        ))}
      </p>
    </section>
  );
  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render();
