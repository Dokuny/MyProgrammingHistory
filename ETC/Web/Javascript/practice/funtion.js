// Function
// - fundamental building block in the program(기본적인 빌딩 블록)
// - subprogram can be used multiple times(서브 프로그램이라고도 불림,재사용가능)
// - performs a task or calculate a value(한가지 일이나 값계산에 쓰임)

// 1. Function declaration
// funtion name(parameter 1,param 2) { body .... return;} 형태
// one function === one thing (하나의 함수는 한가지 일만 담당)
// naming : doSomething, command, verb
// function is object in js (자바스크립트에서 function은 객체다)

// 2. Parameters
// primitive parameters : passed by value(값 전달)
// object parameters : passed by reference(참조값전달, 자바에서 객체매개변수는 참조번지 전달하는거랑 같은듯)

// 3. Default parameters (added in ES6)
function showMessage(message, from ='unknown'){ // = 디폴트값  (파라미터 디폴트값 설정)
    console.log(`${message} by ${from}`);
}
showMessage('Hi');

// 4. Rest parameters (added is ES6)
function printAll(...args){ // ... 쓰면 배열형태로 전달된다.
    for(let i=0; i<args.length;i++){
        console.log(args[i]);
    }
}
printAll('clone','coding','dokuny');

// 5. Local scope(지역범위)

// 6. Return a value

// 7. Early return, early exit(조건이 맞지 않을때는 빨리 리턴을 해서 함수를 종료하도록 코드를 작성한다)
// bad
function upgradeUser(user) {
    if(user.point > 10){
        // long upgrade logic...
    }
}

//good
function upgradeUser(user) {
    if(user.point <= 10){
        return;
    }
    // long upgrade logic...
}

// First-class function
// function are treated like ant other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined.(hoisted) -> 함수 선언식,변수에다가 담는게 아니라 함수를 미리 선언해 두는 것.호이스팅된다.
// a function expression is created when the execution reaches it. -> 함수 표현식,변수에다가 함수를 표현해서 넣는것.호이스팅 X
const print = function (){ // anonymous function,익명함수.
    console.log('print');
};  // 마지막에 ;붙여줘야한다.

// 2. Callback function using functiong expression // 다른 함수의 인자로 사용,콜백
function randomQuiz(answer, printYes, printNo) {
    if(andwer==='love you') {
        printYes();
    }else {
        printNo();
    }
}
// anonymous function
const printYes = function (){
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces(디버깅할때 추적용이)
// recursions(함수 안에서 자기자신을 호출하는 것)가능
const printNo = function print() {
    console.log('no');
};

// Arrow function
// always anonymous
const simplePrint = function (){
    console.log('simplePrint!')
};
// 위의 함수를 아래처럼 화살표로 표시( 함수의 실행문이 리턴값뿐이라면 리턴 및 블록 생략 가능)
const simplePrint1 = () => console.log('simplePrint!');
const add = (a,b) => a + b;
const simpleMultiply = (a,b) => {
   return a*b;
};

// IIFE : Immediately Invoked Function Expression
function hello() {
    console.log('IIFE');
}
hello(); // 함수 호출을 하기 위해선 이렇게 따로 작성해줘야함

// 위를 ()안에 함수를 작성해서 호출 가능.작성하자마자 호출하는법임.
/*
((function hello() {
    console.log('IIFE');
})();
*/

function calculate(command, a, b){
    switch(command){
        case 'add' :
            return console.log(a+b);
        case 'substract' :
            return console.log(a-b);
        case 'divide' :
            return console.log(a/b);
        case 'multiply' :
            return console.log(a*b);
        case 'remainder' :
            return console.log(a%b);
        default :
            console.log('잘못된 입력 값입니다.')
    }
}
const command = prompt('연산자를 입력해주세요')
const a = prompt('값을 입력해주세요');
const b = prompt('값을 입력해주세요');

calculate(command,Number(a),Number(b));