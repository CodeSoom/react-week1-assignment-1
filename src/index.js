/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagName, props, ...chlidren) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });

  chlidren.flat().forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild(document.createTextNode(child));
  });

  return element;
}

function render(props) {
  const element = (
    <div id="hello" className="greeting">
      <p>hell worlod</p>
      <p>
        <button type="button" onClick={() => props.handleClick()}>
          Click me!
          (
          {props.count}
          )
        </button>
      </p>
      <p>
        {[1, 2, 3, 4, 5].map((i) => (
          <button type="button" onClick={() => props.handleClickNumber(i)}>
            {i}
          </button>
        ))}
      </p>
    </div>
  );

  const container = document.getElementById('app');

  container.innerText = '';
  container.appendChild(element);
}

//
function handleClick() {
  this.count += 1;

  render(this);
}

function handleClickNumber(value) {
  this.count = value;

  render(this);
}

const props = {};
props.count = 0;
props.handleClick = handleClick;
props.handleClickNumber = handleClickNumber;

render(props);
