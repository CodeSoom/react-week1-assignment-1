/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* eslint-disable react/jsx-one-expression-per-line */
/* @jsx createElement */

function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });

  children.flat().forEach(
    (child) => {
      if (child instanceof Node) {
        element.appendChild(child);
        return;
      }
      element.appendChild(document.createTextNode(child));
    },
  );
  return element;
}

class CounterModule {
  constructor(defaultValue = 0) {
    this.value = defaultValue;
  }

  get() { return this.value; }

  set(value) { this.value = value; }

  increase(value = 1) { this.value += value; }
}

function ClickMeComponent(counter, countElement) {
  const handleClick = () => {
    counter.increase();
    // eslint-disable-next-line no-param-reassign
    countElement.innerText = counter.get();
  };

  return (
    <p>
      <button type="button" onClick={handleClick}>
        Click me!({countElement})
      </button>
    </p>
  );
}

function SetCountNumberComponent(counter, countElement, numbers) {
  const handleClick = (value) => {
    counter.set(value);
    // eslint-disable-next-line no-param-reassign
    countElement.innerText = counter.get();
  };

  return (
    <p>
      {numbers.map((i) => (
        <button type="button" onClick={() => handleClick(i)}>
          {i}
        </button>
      ))}
    </p>
  );
}

function CounterContainer() {
  const counter = new CounterModule();
  const countElement = createElement('span', {}, counter.get());

  return (
    <div>
      {ClickMeComponent(counter, countElement)}
      {SetCountNumberComponent(
        counter,
        countElement,
        [1, 2, 3, 30, 60, 100],
      )}
    </div>
  );
}

function render() {
  const element = CounterContainer();

  document.getElementById('app').appendChild(element);
}

render();
