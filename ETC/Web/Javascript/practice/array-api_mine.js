// Q1. make a string out of an array
// join() 배열을 문자열로 바꿔줌

{
    const fruits = ['apple', 'banana', 'orange'];
    console.log(fruits.join());
}

// Q2. make an array out of a string
// split()이용
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    console.log(fruits.split(','));
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
// reverse()이용 , 기존 배열 자체를 변화시킴.
{
    const array = [1, 2, 3, 4, 5];
    console.log(array.reverse());
}

// Q4. make new array without the first two elements
// slice()이용 , 기존 배열을 건들지 않고 새로운 배열을 리턴해줌(splice는 기존배열을 삭제,추가하는것)
{
    const array = [1, 2, 3, 4, 5];
    console.log(array.slice(2,5));
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    console.log(students.find(student=>student.score===90));
}

// Q6. make an array of enrolled students
{
    console.log(students.filter(student=>student.enrolled===true));
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    console.log(students.map(student => student.score));
}

// Q8. check if there is a student with the score lower than 50
{
    console.clear();
    console.log(students.find(student=>student.score<50)); // 조건에 맞는 요소 리턴
    console.log(students.some(student=>student.score<50)); // 특정한 값이 하나라도 조건에 맞으면 true 리턴
    console.log(students.every(student=>student.score<50)); // 모든 값이 조건에 맞으야 true 리턴
}

// Q9. compute students' average score
//  reduce(콜백함수, 초기값); 형태
//accumulator(누산기): 누산기는 콜백(리듀서)의 반환 값을 누적한다. 만약 초기값이 제공된다면, 리듀서의 첫번째 호출 시 accumulator의 값은 초기값과 같다. 만약 초기값이 제공되지 않는다면 accumulator는 배열의 첫번째 값이 자동으로 들어가게된다.
// currentValue: 현재 처리할 요소이다.
// currentIndex(optional): 처리할 현재 요소의 인덱스이다. 초기값이 제공되지 않았다면 accumulator에 배열의 첫번째 값인 index 0의 값이 들어가고, currentIndex는 index 1부터 시작하게된다.
// array(optional): reduce()를 호출한 배열
//초기값은 최초의 리듀서 호출에서 accumulator(누산기)에 제공하는 값이다. 초기값이 없다면 배열의 첫번째 요소(0번 인덱스)를 사용하고 초기값이 있다면 주어진 초기값을 사용한다.
{
    console.clear();
   const sum = students.reduce((acc,cur)=> acc + cur.score,0);
   console.log(sum / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const sMap = students.map(student => student.score);
    console.log(sMap.join());
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const sMap = students.map(student => student.score);
     console.log(sMap.sort());
}