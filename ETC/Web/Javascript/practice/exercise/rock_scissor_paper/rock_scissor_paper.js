// 'use strict';
 const userRsp = prompt('가위,바위,보 중 선택하세요','가위');
 let botValue = Math.floor(Math.random()*3)+1;
 let userValue = '';
 let botRsp = '';
 switch (userRsp) {
     case '가위':
         userValue=1;
         break;
     case '바위':
         userValue=2;
         break;
     case '보':
         userValue=3;
         break;
     default : alert('제대로 입력해주세요.');
 }
switch (botValue) {
    case 1:
        botRsp='가위';
        break;
    case 2:
        botRsp='바위';
        break;
    case 3:
        botRsp='보';
        break;
 }
 let result =  botValue-userValue;

 if(result ===0){
     alert(`봇 : ${botRsp}
 유저 : ${userRsp}
 무승부입니다`);
 }else if(result === 1 || result === -2){
     alert(`봇 : ${botRsp}
유저 : ${userRsp}
패배했습니다`);
 }else if(result===-1||result==2){
     alert(`봇 : ${botRsp}
유저 : ${userRsp}
승리했습니다`);
 }















// switch (botRsp){
//     case 1 :
//         botRsp = '가위';
//         break;
//     case 2:
//         botRsp = '바위';
//         break;
//     case 3:
//         botRsp = '보';
//         break;
// }
// switch(userRsp){
//     case '가위' :
//         switch (botRsp){
//             case '가위' :
//                 alert(`봇:${botRsp}, 유저:${userRsp} 무승부입니다`);
//                 break;
//             case '바위':
//                 alert(`봇:${botRsp}, 유저:${userRsp} 졌습니다`);
//                 break;
//             case '보':
//                 alert(`봇:${botRsp}, 유저:${userRsp} 이겼습니다`);
//                 break;
//         }
//         break;
//     case '바위' :
//         switch (botRsp){
//             case '가위' :
//                 alert(`봇:${botRsp}, 유저:${userRsp} 이겼습니다`);
//                 break;
//             case '바위':
//                 alert(`봇:${botRsp}, 유저:${userRsp} 무승부입니다`);
//                 break;
//             case '보':
//                 alert(`봇:${botRsp}, 유저:${userRsp} 졌습니다`);
//                 break;
//         }
//         break;
//     case '보' :
//         switch (botRsp){
//             case '가위' :
//                 alert(`봇:${botRsp}, 유저:${userRsp} 졌습니다`);
//                 break;
//             case '바위':
//                 alert(`봇:${botRsp}, 유저:${userRsp} 이겼습니다`);
//                 break;
//             case '보':
//                 alert(`봇:${botRsp}, 유저:${userRsp} 무승부입니다`);
//                 break;
//         }
//         break;
//     default : alert('제대로 입력해주세요');
// }
