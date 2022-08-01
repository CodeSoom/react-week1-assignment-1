/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

// 함수 생성
function createElement(tagName, props, ...children) {

    const element = document.createElement(tagName);

    Object.entries(props || {}).forEach(([key, value]) => {
        element[key.toLowerCase()] = value;
    });

    children.flat().forEach((child) => {
        if(child instanceof Node){
            element.appendChild(child);
            return;
        }
        element.appendChild(document.createTextNode(child));
    });

    return element;
}
  
// let count = 0; // 카운트 변수

function render({count}) { // 랜더함수안에 매개변수 추가

    function handleClick(val) { //handleClick에 매개변수 val 선언
        render({count:val + 1}); // count = val 이고 +1씩 증감
    }

    function handleClickNumber(val){
        render({count:val});
    }

    const element = (
        <div id="hellow" className="greeting">
            <p>Hellow,  world</p>
            <p>Hi</p>
            <p>
                <button tyle="button" onClick={() => handleClick(count)}>
                    Click me! ({count})
                </button>
            </p>
            <p>
                {[1, 2, 3].map((i) =>(
                    <button type="button" onClick={() => handleClickNumber(i)}>
                        {i}
                    </button>
                ))}
            </p>
        </div>
    );

    // 실행문 
    document.getElementById('app').textContent = '';
    document.getElementById('app').appendChild(element);
}

render({count:0}); // 랜더에 카운터 초기값 0으로 선언