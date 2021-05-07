/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagName, props , ...children){
    //console.log(tagName,props,...children)

    //구성요소 추가하기
    const element = document.createElement(tagName);

    //props (속성정보 불러오기)
    Object.entries(props || {} ).forEach(([key,value])=>{ // null 예외처리도 이렇게 간단하게 해줄 수 있다. 이부분은 자바스크립트 기본 공부 필요할듯. 
    element[key.toLowerCase()] = value //dom객체는 props요소들을 모두 소문자로 인식하기 때문에 key.toLowerCase()로 함수 변경함.
    })

    children.flat().forEach(child => {
        // jsx로 작성된 코드 변환은 가장 내부의 child부터 호출함. 
        
        if (child instanceof Node){
            // div 객체인 경우, 이미 node상태 임으로 element에 추가
            element.appendChild(child);
            return
        }
        // p 앨리먼트 생성 및 추가
        element.appendChild(document.createTextNode(child))
    });

    return element;
}

count = 0;

function handleClick(){
    count += 1;
    console.log(count,'times clicked')
    render();
}

function handleClickNumber(value){
    count = value
    render() 
}

// todo : 추가로 공부할 것 : JS class -> div속성에 className이라고 입력해줘도, class로 포함됨. 자바스크립트에서 class 와 className에 대해서 이해가 필요할듯. css도 관련있음 
function render(){
    const element =(
        <div id="hello" className="greeting"> 
            <p>bable test !</p>
            <p>
                <button type="button" onClick={handleClick}>click me ! ({count}) </button>
            </p>
            <p>
                {// 배열에서 컴포넌트 추가. 단 , children에서 forEach할때 flat 먼저 해주어야함 (이중 배열을 1단배열로 변경해주는 함수. wow!)
                [1,2,3].map((i)=>(
                    <button type="button" onClick={()=>{handleClickNumber(i)}}>{i}</button>
                ))

                }
            </p>

        </div>
    
    );
document.getElementById('app').textContent=''; // 랜더시 초기화 (빈값으로 초기화)
document.getElementById('app').appendChild(element); //app 이라 선언된 공간에 컴포넌트 추가.
}

render();



