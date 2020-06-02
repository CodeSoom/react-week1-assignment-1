/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */


const mainContainer = document.querySelector('#app');

// eslint-disable-next-line no-unused-vars
function createElement(tagName, props = {}, ...children) {
  const element = document.createElement(tagName);
  Object.entries(props || {}).forEach(([key, value]) => { element[key.toLowerCase()] = value; });
  children.flat().forEach((child) => {
    if (child instanceof Node) {
      return element.appendChild(child);
    }
    return element.appendChild(document.createTextNode(child));
  });
  return element;
}


function render() {
  function handleClick(number = 0) {
    const target = document.querySelector('#count');
    let value = '';
    if (number) {
      value = number;
    } else {
      value = parseInt(target.textContent, 10);
      value += 1;
    }
    target.textContent = value.toString();
  }
  const element = (
    <div id="hello" className="greeting">
      <p>Count: </p>
      <span id="count">0</span>
      <p>
        <button type="button" onClick={() => handleClick()}>Click Me!</button>
        {[1, 2, 3].map((number) => <button type="button" onClick={() => handleClick(number)}>{number}</button>)}
      </p>
    </div>
  );

  mainContainer.textContent = '';
  mainContainer.appendChild(element);
}


render();
