'use strict'
// Object-oriendted programming
// class : template
// object : instance of a class
// Javascript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class declaration
class Person {
    // cosntructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    // methods
    spaek() {
        console.log(`${this.name}: Hello!`);
    }
}

const dokuny = new Person('dokun', '27');
dokuny.spaek();

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firsttName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}

// 3. Fields (public, private)
// Too soon! 최근에 나와서 지원안하는 브라우저들이 있다. 찾아보고 쓰자.

class Experiment {
    publicField = 2;    // 아무것도 안붙으면 public
    #privateField = 0;  // # 기호를 붙이면 private
}

// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'dokuny coding';
    constructor(articleNumber) {
        this.articlNumber = articleNumber;
    }
    static printPublisher(){
        console.log(Article.publisher);
    }
}

// 5. Inheritance
// a way for one class to extend anothee class.
class Shape {
    constructor(width,height,color) {
        this.width = width;
        this.height =height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return  width * this.height;
    }
}

class Rectangle extends Shape {}

const rectangle = new Rectangle(20,20,'black');
rectangle.draw();

// 6. Class checking: instanceOf
// 참조변수 instanceOf 클래스명