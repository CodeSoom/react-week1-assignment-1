/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */
function createElement(tagName, props, ...children){
    const element = document.createElement(tagName);   
    Object.entries(props || {}).forEach(([key, value]) => {
        element[key.toLowerCase()] = value;
    })
    children.flat().forEach((child) => {
        if (child instanceof Node) {
            element.appendChild(child);
            return;
        }
        element.appendChild(document.createTextNode(child));
    });
    return element;
}


const count = [0];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

function handleClick(count){
    console.log('click!');
    count.push(1);
    count = count.reduce(reducer);
    console.log(count);
    render();
}
function handleClickNumber(value) {
    render();
}
function render(){
const element = (
    <div id="hello" className="greeting">
 <p>Hello, world!</p>
 <p>
     <button type="button" onClick={()=>handleClick(count)}>
        Click me! 
        (
            
        {count.reduce(reducer)}
        )
     </button>
 </p>
 <p>
     {[1,2,3].map((i)=>(
         <button type="button" onClick={()=>handleClickNumber(i)}>
             {i}
         </button>
     ))}
 </p>
    </div>
   
);
document.getElementById('app').textContent = '';
document.getElementById('app').appendChild(element);
}

render();
