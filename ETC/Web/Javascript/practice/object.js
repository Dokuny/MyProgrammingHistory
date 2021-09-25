// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in Javascript are instances of Object
// object = { key : value};

// 1. Literals and properties
const obj1 = {}; // 괄호를 통해 바로 object 생성가능 = 'object literal' syntax
const obj2 = new Object(); // 선언한 클래스 new 이용해서 만들기 = 'object constructor' syntax

const dokuny = { name :'dokun', age:'32'};

dokuny.hasJob = false;   // dynamically typed language 특성상 나중에 property를 추가 가능.가능하면 이러진말고 프로퍼티 정의할때 한번에 하는게 좋다.
delete dokuny.hasJob;    // 이런식으로 삭제도 가능

// 2. Computed properties (계산된 property)
// key should be always string
console.log(dokuny.name);
console.log(dokuny['name']);  //= computed properties,대신 프로퍼티 타입은 ' ' 이렇게 작은따옴표 안에 넣어줘야한다(=string타입으로 지정해서 받아와야한다)
// 어떤 프로퍼티가 필요한지 모를 때 -> 정확히는 런타임시에 필요한 프로퍼티가 결정될 때 computed properties를 사용한다.
dokuny['hasJob'] = true;

function printValue(obj, key){
    console.log(obj[key]); // obj.key 로 작성하면 undefined가 뜬다. why? obj에 key라는 프로퍼티가 없기 때문에.
}
printValue(dokuny,'name'); // computed properties를 통해 원하는 프로퍼티를 입력받아서 처리할 수 있음
printValue(dokuny,'age');

// 3. Property value shorthand
const person1 = makePerson1('jihee',20);
const person2 = makePerson2('dohun', 32);
console.log(person1);
console.log(person2);

function makePerson1(name,age){
    return {
        name : name,
        age : age
    };
}

// key 와 value 의 이름이 동일하다면 키 생략 가능
function makePerson2(name,age){
    return {
        name,
        age
    };
}

// 4. Constructor function
const person3 = new Person('dohun', 32);
function Person(name,age) {
    this.name = name;
    this.age =age;
}

// 5. in operator: property existence check (key in obj) 객체안에 키가 있는지 확인하는 in연산자
console.log('name' in dokuny);
console.log('height' in dokuny);

// 6. for..in vs for..of
// for (key in obj)  객체안의 모든 key프로퍼티들 반복문으로 처리해줌. value가 아닌 key를 반복
for(key in dokuny){
    console.log(key);
}

// for(value of iterable) 배열일때 사용

// 7. Fun cloning
// Object.assign(dest,[obj1,obj2,obj3....]) dest는 obj를 전부 복사해서 프로퍼티로 갖는다. / 선언식으로 쓸거면 dest를 변수명으로 작성 후 {}로 처리한다.
const user = { name: 'dokuny', age:'20'};
const user2 = user; // 얕은 복사
// old way ,옛날방식 deep clone
const user3 = {};
for(key in user){
    user3[key]=user[key];
}
console.log(user3);
user3.name='tory';
console.log(user3);
console.log(user);

// Object.assign 방식
const user4={};
Object.assign(user4,user);
console.log(user4);
// const user4 = Object.assign({},user); 이렇게 해도된다, 앞의 매개변수가 초기값,뒤의 매개변수가 복제될 객체
const a = Object.assign(dokuny);
console.log(a);
console.clear();

// Object.keys() : 키 배열 반환
console.log(Object.keys(user));

// Object.values() : 밸류 배열 반환
console.log(Object.values(user));

// Object.entries() : 키/값 배열 반환
const userEn = Object.entries(user);
console.log(userEn);

// Object.fromEntries() : 키/값 배열을 객체로 만들어줌
console.log(Object.fromEntries(userEn));

// Symbol형 (위의 keys,values,entries는 symbol형을 건너 뛴다 -> 심볼은 반환값에 포함안된다.)
const id = Symbol('id');
const user10 = {
    name : 'mike',
    age : 23,
    [id] : 'myid',
}

console.log(user10[id]);

// Symbol.for
// 하나의 심볼만을 보장받음
// 심볼함수는 매번 다른 심볼 값을 생성하지만 Symbol.for 메소드는 하나를 생성한뒤  키를 통해 같은 심볼을 공유
const id1 = Symbol.for('id');
const id2 = Symbol.for('id');
console.log(id1===id2); // true

