/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagName, props = {}, ...children) {
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


function render() {
  function getCount() {
    return document.querySelector('#count').textContent;
  }
  function addCount(count) {
    if (typeof count === 'number') {
      document.querySelector('#count').textContent = count.toString();
      return;
    }
    document.querySelector('#count').textContent = count;
  }
  function convert(count) {
    if (typeof count === 'string') {
      return parseInt(count, 10);
    }
    return count;
  }
  function countUp(count) {
    return count + 1;
  }


  function handleClick(i) {
    if (typeof i === 'number') {
      addCount(i);
    } else {
      addCount(countUp(convert(getCount())));
    }
  }

  const element = (
    <p>
      <h1>Hello world!</h1>
      <p>
        <button type="button" onClick={handleClick}>
          Click me!
          (
          <span id="count">0</span>
          )
        </button>
        <p>
          {[1, 2, 3].map((i) => <button type="button" onClick={() => handleClick(i)}>{i}</button>)}
        </p>
      </p>
    </p>
  );

  document.querySelector('#app').textContent = '';
  document.querySelector('#app').appendChild(element);
}

render();
