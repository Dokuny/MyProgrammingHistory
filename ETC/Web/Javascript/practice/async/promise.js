'use strict';

// Promise is a JavaScript object for asynchronous operation.
// 자바스크립트 안에 내장되어 있는 promise 오브젝트, 비동기적인 것을 수행할 때 콜백함수대신 유용하게 쓰임
// State : pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
// 뭔가 무거운 작업들을 할때는 비동기로 처리하는 것이 좋다(network or read files 등의 작업들)
const promise = new Promise((resolve,reject)=>{
    console.log('doing something...');
    // 위는 promise를 작성하자마자 executor가 실행된다.
    // 그렇기에 네트워크 요청을 사용자가 요구했을때만 해야하는 경우라면 요구하지도 않았는데도 불필요한 네트워크통신이 일어날 수 잇음
    setTimeout(()=>{
        resolve('dokuny');
        },2000
    );
});

// 2. Consumers: then, catch, finally
promise.then((value)=>{
    console.log(value);
})
    .catch(error => {
        console.log(error);
    })
    .finally(()=>{console.log('finally')});


