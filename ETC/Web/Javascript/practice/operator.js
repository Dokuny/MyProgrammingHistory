// 1. String concatenation
console.log('my'+ 'cat');
console.log('1' + 2); // string 값이 앞에 있으면 뒤에 number 타입이 저절로 string으로 변환 후 붙는다.
console.log(1 + 3 + '2'); // number값이 앞에 나오면 먼저 계산후 뒤에 달라붙는다(number값이 하나만 있을때는 x)
console.log(`string literals: 1+2=${1+2}`);

// 2. Numeric operators
// 자바랑 연산자 동일,추가적으로 ** 거듭제곱연산자 알아두자
console.log(2 ** 3); // 2의 세제곱

// 3. Increment and decrement operators
// preincrement 전위 증감연산자 ++변수
// postincrement 후위 증감연산자 변수++

// 4. Assignment operators(할당연산자)
// +=,-=,*=,/= 등등

// 5. Comparison operators(비교연산자)
// < , <= , > , >=

// 6. Logical operators (논리연산자)
// || , && , !
// 되도록이면 연산을 많이시행하는 애를 뒤로 빼서 비교해야한다. 간단한 애들을 앞에 두고 비교(어차피 앞이 참이되면 뒤는 실행을 안하니까)
// value1 || value2 || function() 이런식으로. && 도 마찬가지

// 7. Equality
const stringFive ='5';
const numberFive = 5;

// == loose equaility, with type conversion (안의 값만 비교할때,자동변환)
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion (타입까지 비교할때,자동변환 X)
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const tory1 ={ name: 'tory'};
const tory2 ={ name: 'tory'};
const tory3 = tory1;
console.log(tory1 == tory2);
console.log(tory1 === tory2);
console.log(tory1 === tory3);
console.log(tory2 === tory3);
console.log(tory1 == tory3);

// 8. Contitional operator : if
// if, else if , else

// 9. Ternary operator : ?
// 조건 ? 값 : 값 ;

// 10 Switch statement
// 실행문이 같은 조건을 묶을땐 case 1: case 2: 이런식으로 자바처럼 묶는다

// 11. Loops
// while , do while , for
// 배열의 경우, for (const a of arr) 로 향상된 포문처럼 쓸수 있음 for( string a : b) 요것처럼
// 혹은 arr.forEach((a)=>console.log(a)); forEach 사용
// nested loops 도 가능(cpu에 안좋기때문에 되도록이면 쓰지 않는게 좋다고 한다....)
// break, continue
for(let i=0; i<11;i++){
    console.log(i);
}

for(let i=0; i<11;i++){
    if (i!==8)
        console.log(i);
}