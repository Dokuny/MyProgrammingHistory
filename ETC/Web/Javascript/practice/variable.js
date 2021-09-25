// 1. Use strict
// added in ES 5
'use strict';


// 2. Variable
// 2-1. let and var(mutable 타입,read and write)
// let (added in ES6)

let globalScope = 'global scope'; // 어디에서나 접근 가능 global scope(자바의 전역 변수,field정도?), 글로벌 변수는 최대한 적게 쓰는게 좋다,항상 메모리를 차지하므로
{
    let name = 'dokuny';  // 블록 안에서 선언된 local scope,지역변수
    console.log(name);
    name = 'hello';
    console.log(name);
}

// var (don't ever use this!!)decimal
// var hoisting : 변수가 어디에 선언되어있던지 제일 위로 끌어올려주는 것(move declaration from bottom to top)
// var는 블록 스코프가 없음 (has no block scope),블록 안에 선언하더라도 블록 밖에서 사용할 수 있다.(유연성있지만 오류 발생 확률이 높음)

// 2-2. const (상수,자바의 final느낌,immutable 타입,read only)
// favor immutable data type always for a few reasons :
// - security(변경방지)
// - thread safety(다양한 스레드에서 변수접근해서 동시에 값을 변경할 수 있으므로 막아줌)
// - reduce human mistake

// 3. Variable types
// primitive -> single item(더 이상 작게 나눠질 수 없는 상태) : number,string,boolean,null,undefined,symbol(
// object -> box container(single item들을 묶어서 관리해주는 것,객체)
// fuction -> first-class function(변수에 function(자바에서는 메소드,함수)이 할당될 수 있다는 의미,함수를 변수처럼 사용)
// number : 자바의 숫자형 타입,자바스크립트에선 따로 타입선언 안해도된다.

const count = 17; // integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity,-infinity,NaN
const infinity = 1 / 0; // 양수를 0으로 나누면 infinity
const negativeInfinity = -1 / 0; // 음수를 0으로 나누면 -infinity
const nAn = 'not a number' / 2; // 숫자가 아닌 것을 숫자로 나누려하면 NaN
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
// 최근에 나온 개념임
const bigInt = 123456789012345678901234567890n; // over (-2*53 ~ 2*53) , 숫자범위가 정해져있었는데 숫자 뒤에 n붙이면 범위 이상가능(자바의 int ->long 느낌)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char ='c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${brendan}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals(string) -> `  ${} ` 이런 형태로 사용하는 것, 자바의 printf쓰는 것처럼 매번 + 붙여서 안쓸 수 있음
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false : 0, null, undefined, NaN, ''(비어있는 string)
// true : any other value
const canRead = true;
const test = 3<1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2); // true
// 심볼은 바로 출력 X, .description 붙여줘야한다.
console.log(`value: ${symbol1.description}, type: ${typeof nothing}`);

// object, real-life object, data structure
const dokuny = {name : 'dokuny', age: 27}; // 내부의 변수들은 const가 아니기 때문에 나중에 불러다가 변경가능
dokuny.age = 20;


// 5. Dynamic typing : dynamically typed language (런타임시 할당된 값에 따라 변수의 타입이 변한다,변수선언시 타입할당 X)
// 자바스크립트의 위의 특성 때문에 개발자가 많은 프로젝트에서 문제가 발생할 수 있다.
// 원래 string타입으로 지정해놓은 변수를 한 개발자가 number타입으로 바꾸고 말을 안해줬다면 기존 개발자들은 계속 stirng으로 생각하고 작성
// 하니 오류가 발생할 수 있음.
// 이를 해결하기위해서 type script가 나옴

