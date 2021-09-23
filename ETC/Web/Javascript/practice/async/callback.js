'use strict';

// JavaScript is synchronous.
// Execute the code block by order after hoisting.
console.log('1');  // 동기
setTimeout(() => console.log('2'), 1000); // Asynchronous callback,비동기
console.log('3'); // 동기

// Synchronous callback
function printImmedaitely(print) {
    print();
}

printImmedaitely(() => console.log('hello')); // 동기

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 2000); // 비동기


// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'dokuny' && password === 'tory') ||
                (id === 'jihee' && password === 'jiu')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'dokuny') {
                onSuccess({name: 'dokuny', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            (userWithRoles)=>{ // getRoles에서 if조건이 성립될 때 onSuccess에서 새로운 객체가 만들어짐 -> userWithRoles가
                alert(`Hello ${userWithRoles.name}, you have a ${userWithRoles.role} role`);
            },
            (error)=>{
                console.log(error);
            }
        );
    },
    error => {console.log(error)}
);

// 이러한 콜백 체인의 문제점은 가독성이 떨어짐,한눈에 이해하기가 쉽지않다, 수정할 때도 복잡해짐.유지보수가 안좋다.