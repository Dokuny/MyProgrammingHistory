// JSON (JavaScript Object Notation)

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(),
    // symbol : Symbol('id'), // 자바스크립트에만 있는 symbol등 은 JSON에 포함이 안된다.
    jump : () => {  // 함수는 JSON에서 제외된다.
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name','color','size']); // 원하는 프로퍼티만 replacer에 골라 넣으면 JSON으로 변환된다.
console.log(json);


json = JSON.stringify(rabbit, (key,value) => {
    console.log(`key: ${key} , value:${value}`);
    return value;
}); //
console.log(json);


// 2. JSON to Object
// parse(json)

console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);

console.clear();
console.log(rabbit.birthDate.getDate());
//console.log(obj.birthDate.getDate()); // 오류발생함, json에서 다시 객체로 변환한거는 단지 string으로 변환된 것 일 뿐임.
//해결하려면 콜백함수 사용(reviver)
const obj2 = JSON.parse(json, (key,value)=>{
    console.log(`key: ${key} , value:${value}`);
    return key === 'birthDate' ? new Date(): value;
});
console.log(obj2);
console.log(obj2.birthDate.getDate())

// 유용한 사이트:
// JSON Diff checker: http://www.jsondiff.com/
// JSON Beautifier/editor: https://jsonbeautifier.org/
// JSON Parser: https://jsonparser.org/
// JSON Validator: https://tools.learningcontainer.com/j...