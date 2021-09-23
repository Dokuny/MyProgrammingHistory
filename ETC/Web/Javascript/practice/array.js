'use strict'

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[1]);

// 3. Looping over an array
// print all fruits
// a. for
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits){
    console.log(fruit);
}
console.clear();
// c. forEach
fruits.forEach((fruit)=> console.log(fruit));

// 4. Add, delete,copy
// push : add an item to the end
fruits.push('strawberry','melon');
console.log(fruits);
// pop : remove an item from the end
fruits.pop();
console.log(fruits);

// unshift : add an item to the beginning
fruits.unshift("strawberry",'lemon');
console.log(fruits);
// shift : remove an item from the beginning
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop,push , 앞에서부터 넣거나 빼면 뒤에 있는 애들을 전부 밀거나 땡겨야 하기 때문.

//  splice : remove an item by index position , splice(매개변수로 지우기 시작할 index,지울 개수,추가할 아이템) , 지울 개수를 지정하지 않으면 전부 지움.
fruits.splice(2,1,'mandarine','grape');
console.log(fruits);

// combine two arrays  , concat사용 괄호 안에 있는게 뒤에 붙음
const fruits2 = ['lemon','mango'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5.Searching
// indexOf, 해당 조건에 맞는 첫번째 value의 인덱스를 리턴.뒤에 숫자를 넣으면 어디서부터 찾을지 설정해주는 것.
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('lemon',1));

// includes, value가 있는지 없는지 true,false를 리턴
console.log(fruits.includes('apple'));

// lastIndexOf , indexOf의 마지막꺼 찾는 버전.
fruits.push('apple');
console.log(fruits);
console.log(fruits.lastIndexOf('apple'));



