/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  children.flat().forEach(child => {
    if (child instanceof Node){
      element.appendChild(child)
      return;
    }
    element.appendChild(document.createTextNode(child))
  })

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  })

  return element;
}

let count = 0;

function handleClick(){
  count += 1;
  console.log(count)
  render()
}

function render(){
  const element = ( <div id='name' className="hi"> 
      <p> Hello </p> 
      <p> Hi </p> 
      <button onClick={handleClick}>
        Click me!
        ({count})
        </button>
        <p>
        {[1,2, 3].map(i =>(<p>{i}</p>))}
        </p>
    </div>
  )
  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render()