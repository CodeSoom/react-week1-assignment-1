// /* @jsx createElement */

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


const clicked = {
    count: 0
};
const reducer = (accumulator, currentValue) => accumulator + currentValue;

function handleClick(clicked){
    console.log('click!');
    clicked.count += 1;
    console.log(clicked.count);
    render();
}
function handleClickNumber(value) {
    clicked.count = value;
    render();
}
function render(){
const element = (
    <div id="hello" className="greeting">
 <p>Hello, world!</p>
 <p>
     <button type="button" onClick={()=>handleClick(clicked)}>
        Click me! 
        (
            
        {clicked.count}
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

