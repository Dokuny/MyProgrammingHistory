let sum ='';
let sum1='';
let operator ='';

function printScreen(text) {
    const numBoard = document.getElementById('numBoard');
    numBoard.innerText = text;
}

function clickBtn(e) {
    let inputBtn = e.innerText;

    switch(inputBtn){
        case '1': case '2': case '3' : case '4': case '5': case '6': case '7': case '8': case '9': case '0': case '.':
            sum += inputBtn;
            break;
        case 'x' : case '/': case '-': case '+':
            sum1= sum;
            sum ='';
            operator = inputBtn;
            break;
        case '=':
            sum = calculate(operator,sum1,sum);
            break;
        case 'R':
            sum1='';
            sum='';
            operator='';
            break;
        case 'B':
            sum=sum.slice(0,-1);
            break;
    }
    printScreen(sum);
}

function calculate(operator,sum1,sum) {
    let a = Number(sum1);
    let b = Number(sum);
    switch(operator){
        case 'x':
            return a*b;
        case '/':
            return a/b;
        case '-':
            return a-b;
        case '+':
            return a+b;

    }
}
