/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */
function createElement(tagName, props = {}, ...children ) {
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

function handleClick_countValue(value) {
    value = value +1;
    document.getElementById("button").value(value);
    document.getElementById("button").innerHTML(`click Me ${value}`);
    render();
}

function handler_Click(value) {
    document.getElementById("button").value(value);
    document.getElementById("button").innerHTML(`click Me ${value}`);

    render();
}

function render(){
    const element = (
        <div id = "hello" className = "greeting">
            <p>hello World</p>
            <p>
                <button id = "button" type = "button" 
                onClick = {() => handleClick_countValue(document.getElementById("button").value())} value = "0">
                    click Me 0
                </button>
            </p>
            <p>
                {[1, 2, 3].map((i) =>
                <button type = "button" onClick = {() => handler_Click(i)}>
                    {i}
                </button>
                )}
            </p>
        </div>
    );

    document.getElementById("app").textContent ="";
    document.getElementById("app").appendChild(element);
};

render();
%s/^M$//g

