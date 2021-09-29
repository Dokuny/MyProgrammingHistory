# 자바 스크립트(Java Script)
***
### HTML 내에서 ``<script>`` 위치별 차이
1. ``<head>`` 태그 안에서 작성 
    ```
     parsing HTML ->            blocked             ->parsing HTML(page is ready)  
                         fetching js->excuting js
   
      html을 쭉 읽다가 head 안의 js발견하고 멈춘 다음 js를 다운받아서 실행시키고 다시 HTML을 읽는다.
    ```
   * js의 사이즈가 클 경우 웹사이트를 보기까지 많은 시간이 소요된다.  


2. ``<body>`` 태그 마지막부분에 작성
   ```
    parsing HTML(page is ready) -> fetching js -> executing js
   ```
   * 사용자가 기본적인 HTML 컨텐츠를 빨리 볼 수 있음 , 그러나 js를 fecthing하는 시간을 기다려야 제대로 된 사이트를 볼 수 있다
3. ``<head>`` + ``async`` 속성
   ```
    형태 : <script async src=""><script>
   
    parsing HTML  ->   blocked    -> parsing HTML (page is ready)
     fetching js  -> executing js 
   
    병렬 형식으로 fetching을 같이 해주다가 executing 할 때만 block, js 실행 후 다시 parsing
    여러개의 스크립트를 async로 가져올 땐, 먼저 fetching 된 js부터 실행 
   ```
   * 장점 : 병렬로 fetching 하기 때문에 다운로드 받는 시간을 절약
   * 단점 
     1. HTML이 완전히 parsing되기도 전에 executing을 하다보니 js에 연결된 HTML이 정의가 안되어 있을 수도 있다.
     2. block하기 때문에 여전히 사용자가 페이지를 보는데 시간이 더 걸릴 수 있다.
4. ``<head>`` + ``defer`` 속성
   ```
    parsing HTML(page is ready) - >  executing js
      fetching js 
   
      병렬 + html이 완전히 준비되어야 executing
      여러개의 스크립트를 defer로 가져올 때, 모든 스크립트가 다 fetching 되고 html이 준비되어야 스크립트 선언 순서대로 js 실행 
   ```
   * 위의 것들을 전부 보완한 형태
***
### 자바스크립트에 'use strict' 선언
```javascript
 'use strict';
```
* js를 만들고 맨 위에 작성
* type script를 쓸 때에는 필요 없음
* 브라우저에서는 문제없지만 자바스크립트 상에서 문제가 생기는 부분들을 미리 체크해준다.(strict 모드)
* 실행할 때도 성능개선이 있다.

***
## 자바스크립트와 첫만남
### 자바스크립트로 무엇을 할까
* 웹의 요소 제어
* 웹 애플리케이션 제작(React)
* 다양한 라이브러리 사용(jQuery)
* 서버 개발(Node.js)

### 웹 브라우저가 자바스크립트를 만났을 때
1. 웹 문서 안에 ``<script>`` 태그로 자바스크립트 작성하기
    * 자바스크립트 소스 코드가 짧을 경우 자바스크립트를 실행할 위치에``<script></script>``로 작성
    * ``<script>``는 웹 문서 안 어디든 위치 가능,여러개 사용도 가능
    * 되도록이면 이미지나 텍스트 등을 다 표시한 후에 실행.(``</body>`` 직전에 자바스크립트 소스 삽입)
    * 영어 대소문자 구별
    * **단점** : HTML과 섞여 복잡,수정시 코드찾기 어려움,같은 자바스크립트 사용 시 똑같은 소스 반복해서 삽입


2. 외부 스크립트 파일로 연결해서 자바스크립트 작성
   * ``<script>`` 태그없이 *.js 확장자로 작성
   * HTML문서에서 ``<script>``태그의 src 속성 이용해서 연결
   ```html
   <script src="외부 스크립트 파일 경로"></script>
   ```
   
### 자바스크립트 용어와 기본 입출력 방법
1. 자바스크립트의 큰 줄기 [**식과 문**]
   * 식<sup>expression</sup> : 표현식,어떤 값을 만들어 낼 수 있는 것,식은 변수에 저장
   * 문<sup>statement</sup> : 명령, 문의 끝에는 세미콜론(;) 붙여서 구분,조건문,제어문 등
2. 간단한 입출력 방법
   * 알림 창<sup>alert</sup> 출력하기   
     ``` javascript
     alert("메시지") // 기본형,메시지 보여주는 기능
     ```
   * 확인 창<sup>confirm</sup> 출력하기
     ```javascript
      var reply = confirm("메시지") // 확인,취소 버튼나옴,선택한 버튼 값 변수에 저장
     ```
   * 프롬프트 창<sup>prompt</sum>에서 입력받기
     ```javascript
      var name = prompt("메시지") // 텍스트 필드가 있는 작은 창(기본값없으면 빈 텍스트필드로)
      var name = prompt("메시지","기본값") // 텍스트 필드 안에 기본값 설정
     ```
   * 웹 브라우저 화면에 출력을 담당하는 document.write() 문 
     ```javascript
      document.write("<h1>메시지</h1>"); // 웹 문서(document) 안에 괄호 안 내용을 write하는 명령문,자바 작성하듯이 작성 가능
      
      //예시
      var name =prompt("이름을 입력");
      document.write("<b><big>" + name + "</big></b>님,환영합니다");
     ```
   * 콘솔 창에 출력하는 console.log() 문
     ```javascript
      console.log() // 괄호 안의 내용을 콘솔 창에 표시,document.write처럼 사용  
     ```
* 오류 찾기 tip : 문서 열어서 ctrl + shift + j 눌러서 콘솔 창으로 확인
### 자바 스크립트 스타일 가이드
1. 코딩 규칙이 필요한 이유
   * 소스 코드의 오류를 줄이고 일관성 유지
   * 유지,보수 시 수월하고 비용감소
   * 협업 시에도 유리
2. 자바스크립트 스타일 가이드
   * 회사 프로젝트를 맡은 팀에서 따로 만들어 사용할 수 있음
   * 보통은 [구글](https://google.github.io/styleguide/jsguide.html) 이나 [에어비앤비](https://github.com/airbnb/javascript) 에서 배포한 것을 기준으로 작성
3. 작성 규칙
   1. 코드를 보기 좋게 들여쓰기
   2. 세미콜론으로 문장 구분
   3. 공백을 넣어 읽기 쉽게 작성
   4. 소스코드를 잘 설명하는 주석을 작성(하지만 보고도 이게 무슨코드인지 알 수 있게 주석없이 작성하는게 베스트)
   5. 식별자<sup>identifier</sup>는 정해진 규칙을 지켜 작성 = 자바에서 변수이름
   6. 예약어<sup>keyword</sup>는 식별자로 사용할 수 없다 = 자바에서 타입

***
## 자바스크립트 기본 문법
### 변수 알아보기
1. 변수란
   * 변수 : 프로그램을 실행하는 동안 값이 달라질 수 있는 데이터
   * 상수 : 값을 한번 지정하면 바뀌지 않는 데이터
2. 변수 선언하기
   ```javascript
    var 변수명
   ```
   
### 자료형
1. 자료형이란
   * 컴퓨터가 처리할 수 있는 자료의 형태
   * 자바랑 다르게 여기선 var로 다 처리 (변수를 선언할 때 자료형 지정하지 않고 값을 할당할 때 지정)
   * 문자열이면 "",'' 사용,boolean이면 true,false, 배열이면 []안에 나열,객체는 new 객체명()
   * 문자열안에 다른 문자열 넣고싶으면 큰따옴표가 중복되지 않도록 속성값은 작은따옴표로 묶어서 표현
      ```javascript
      document.write("<span style='color:blue'>","Do it","</span>")
      ```
   * undefined 유형 : 변수 선언만 지정하고 값 할당 안되었을 때
   * null 유형 : 할당된 값이 유효하지 않을 때
### 연산자
1. 자바랑 똑같음
2. ==,!=는 피연산자의 자료형을 자동으로 변환해서 비교,===,!==는 변환 X
3. 비교연산자에서 === 는 피연산자도 같고 자료형도 같을때 true,!==는 피연산자나 자료형이 같지 않으면 true

### 조건문(if,switch),반복문(for,while)
* 자바랑 동일

***

### 자바스크립트 출력 방식
1. ``window.alert()`` 메소드
   * 브라우저와는 별도의 대화 상자를 띄워 사용자에게 데이터를 전달
     ```javascript
      function alertDialogBox() {
         alert("전달할 메세지를 쓰면 된다.");
      }
     ```

2. HTML DOM 요소를 이용한 ``innerHTML`` 프로퍼티 -> 가장 많이 사용
   * document 객체의 getElementByID()나 getElementsByTagName() 등의 메소드를 사용하여 HTML 요소를 선택
   *  innerHTML 프로퍼티를 이용하면 선택된 HTML 요소의 내용(content)이나 속성(attribute)값 등을 변경
      ```javascript 
        var str = document.getElementById("text");
   
        str.innerHTML = "이 문장으로 바뀌었습니다!";
      ```

3. ``document.write()`` 메소드
   * 웹 페이지가 로딩될 때 실행되면, 웹 페이지에 가장 먼저 데이터를 출력
   * 대부분 테스트나 디버깅을 위해 사용
     ```javascript
      document.write('입력하세용');
     ```

4. ``console.log()`` 메소드
   * 웹 브라우저의 콘솔을 통해 데이터를 출력
   * 콘솔 화면을 통한 데이터의 출력은 좀 더 자세한 사항까지 출력되므로, 디버깅하는데 많은 도움이 된다
     ```javascript
      console.log(2 + 5);
     ```
***
   
## 스코프(Scope)
* 식별자가 유효한 범위를 뜻함
### 스코프의 종류
* 전역 스코프
  * 전역은 ``가장 바깥 영역``,전역에서 선언된 변수는 어디서든지 참조할 수 있는 전역스코프를 가지는 전역 변수가 된다.
* 지역 스코프
  * 대부분의 프로그래밍언어는 함수 몸체만이 아니라 모든 코드블록이 지역스코프를 만든다(=``블록레벨 스코프``)
  * 자바스크립트의 지역은 ``함수 몸체 내부``, 지역변수는 지역스코프를 가지며 자신의 지역스코프와 하위지역 스코프에서 유효하다.
  * 즉,``var``키워드로 선언된 변수는 오로지 함수의 코드블록만을 지역스코프로 인정한다.(자바스크립트의 지역스코프=``함수 레벨 스코프``)
  * ``let``,``const``는 블록레벨스코프를 지원한다.
 
### 스코프 체인
  * 함수가 중첩될 수 있으므로 함수의 지역스코프도 중첩될 수 있다.
  * 스코프가 함수의 중첩에 의해 계층적 구조를 갖는다는 것을 의미(스코프체인)
  * 변수를 참조할 때 자바스크립트 엔진은 스코프 체인을 통해 변수를 참조하는 코드의 스코프에서 시작하여  
    상위 스코프 방향으로 이동하며 선언된 변수를 검색한다.  (=물리적인 스코프체인이 렉시컬 환경)
### 함수레벨 스코프 
  ```javascript
   var x=1;
   if(true){       
       var x=10;   // var 키워드로 선언된 변수는 코드블록 내에서 선언되었다 할지라도 함수 내부가 아니면 전부 전역 변수다.
   }               // ES6에서 도입된 let,const는 블록레벨 스코프를 지원한다.
   console.log(x); // 10
  ```
### 렉시컬 스코프
* 상위 스코프 결정 방법
  * 동적 스코프 : 함수가 호출되는 시점에 동적으로 상위 스코프를 결정
  * 렉시컬 스코프(정적 스코프) : 함수를 정의하는 시점에서 정적으로 상위 스코프를 결정


* 자바스크립트는 렉시컬 스코프를 따른다
  * 함수를 어디서 호출했는지가 아닌 함수를 어디서 정의했는지에 따라 상위 스코프를 결정한다.
  * 즉, 함수의 상위 스코프는 언제나 자신이 정의된 스코프다.
  ```javascript
        var x =1;
  
        function foo(){
            var x=10;
            bar();         // bar함수가 정의된 곳은 foo함수의 스코프가 아닌 상위의 전역스코프이다.
        }
		
        function bar(){    // 렉시컬스코프이므로 같은 스코프에 들어있는 첫번째 var x가 나온다.
            console.log(x);
        }
		
        foo(); // 1이 출력 /
        bar(); // 1이 출력
  ```
  
***
## 전역 변수의 문제점
### 변수의 생명 주기
* 변수는 선언에 의해 생성,할당을 통해 값을 갖고 언젠가 소멸한다(생명주기가 존재)
  * 변수에 생명주기가 없다면 한번 선언된 변수는 프로그램을 종료하지 않는 한 영원히 메모리 공간을 점유
* 변수는 자신이 선언된 위치에서 생성되고 소멸
  * 전역 변수의 생명 주기는 애플리케이션의 생명주기와 동일
    * var 키워드로 선언한 전역 변수는 전역객체(브라우저에선 window객체)의 생명주기와 일치.
  * 지역 변수는 함수가 호출되면 생성되고 함수가 종료되면 소멸(지역변수는 함수의 생명주기와 일치)
    * 변수는 자신이 등록된 스코프가 소멸될 때 까지 유효하다. 
    * but, 누군가가 함수의 스코프를 참조하고 있다면 함수가 종료되었더라도 스코프는 해제되지않고 생존한다(=클로저)



### 전역 변수의 문제점 
1. ``암묵적 결합``의 허용
   * 모든 코드가 전역 변수를 참조하고 변경할 수 있다는 것   
   -> 유효범위가 클수록 가독성이 나빠지고 상태가 변경될 수 있는 위험성도 높아진다.
2. 긴 생명주기
   * 의도치 않은 재할당 발생
   * 메모리 리소스를 오랜시간 차지
3. 스코프 체인 상에서 종점에 존재
   * 전역 변수의 검색속도가 가장 느리다
4. 네임스페이스 오염
   * 자바스크립트는 파일이 분리되어 있다 해도 하나의 전역 스코프를 공휴한다.
   * 만약 다른 파일 내에서 동일한 이름으로 명명된 전역변수나 전역함수가 같은 스코프 내에 존재하면 예상치 못한 결과가 발생한다.

### 전역 변수의 사용을 억제하는 방법
* 전역 변수를 반드시 사용해야 할 이유를 찾지 못한다면 지역 변수를 사용해야 한다. 변수의 스코프는 좁을수록 좋다.
* 억제방법
  1. 즉시 실행 함수
     ```javascript
       (function(){       // 함수 정의와 동시에 호출되는 즉시 실행 함수는 단 한번만 호출된다.
           var foo=10;    // 모든 코드를 즉시 실행함수로 감싸면 모든 변수는 즉시 실행 함수의 지역변수가 된다.
       }());
        console.log(foo);
     ```
  2. 네임스페이스 객체
     ```javascript
        var MYAPP ={};        // 전역 네임 스페이스 객체
        MYAPP.name = 'Lee';   // 전역에 네임스페이스 역할을 담당할 객체를 생성하고 전역 변수처럼 사용하고 싶은 변수를 프로퍼티로 추가
        console.log(MYAPP.name); // Lee
     
        MYAPP.person ={       // 네임스페이스 객체에 또 다른 네임스페이스 객체를 프로퍼티로 추가해서 
          name : 'Lee',       // 네임스페이스를 계층적으로 구성할 수도 있다.
          address : 'Seoul',  
        };
        console.log(MYAPP.person.name); // Lee
     
        // 네임스페이스 객체방식은 네임스페이스 객체 자체가 전역 변수에 할당되므로 그다지 유용하지는 않음
     ```
  3. 모듈 패턴
     * 모듈 패턴은 클래스를 모방해서 관련이 있는 변수와 함수를 모아 즉시 실행 함수로 감싸 하나의 모듈을 만든다
     * 클로저를 기반으로 동작(캡슐화 까지 구현 가능)
     ```javascript
      var Counter =(function (){
            //private 변수
            var num=0;
     
            // 외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환한다.
            return {
                increase(){
                     return ++num;
                },
                decrease(){
                     return --num;
                }      
            }; 
      }());
     
     // private 변수는 외부로 노출 X  
     console.log(Counter.num); // undefined
     
     console.log(Counter.increase()); // 1
     console.log(Counter.increase()); // 2
     console.log(Counter.decrease()); // 1
     console.log(Counter.decrease()); // 0
     ```
  4. ES6 모듈
    * ES6 모듈을 사용하면 더는 전역 변수를 사용할 수 없다.
    * ES6 모듈은 파일 자체의 독자적인 모듈 스코프를 제공한다.
    * 모듈 내에서 var 키워드로 선언한 변수는 더는 전역변수가 아니며 window 객체의 프로퍼티도 아니다
    * 모던브라우저에서 사용가능
    * ``<script>``에 ``type="module"`` 어트리뷰트를 추가하면 로드된 자바스크립트 파일은 모듈로서 동작한다.확장자는 mjs권장
    ```javascript
    <script type="module" src="lib.mjs"></script>
    <script type="module" src="app.mjs"></script>
    ```
    * 구형브라우저에서는 동작하지않고, 사용하더라도 트랜스파일링이나 번들링이 필요하기 때문에 모듈번들러를 사용하는 것이 일반적
  
***
## let.const 키워드와 블록 레벨 스코프
### var 키워드로 선언한 변수의 문제점 
1. 변수 중복 선언 허용
2. 함수 레벨 스코프
3. 변수 호이스팅

### let 키워드 장점
1. 변수 중복 선언 금지
2. 블록 레벨 스코프
3. 변수 호이스팅
   * let은 변수 선언단계와 초기화단계가 분리되어 진행
   * 스코프의 시작지점부터 초기화 시작 지점까지 변수를 참조할 수 없는 Temporal Dead Zone(TDZ)형성으로 let도 호이스팅되지만 작동 X

### const 키워드
1. 선언과 동시에 초기화를 해야함
2. 블록레벨 스코프 및 호이스팅 하지 않는 것처럼 동작
3. 재할당 금지
4. ``원시값``을 할당할 경우 ``상수``로 작용
5. ``객체``를 할당할 경우 값 변경 가능(재할당 없이도 가능하기 때문) -> 재할당만 금지지 불변은 아니다.

### 뭐가 좋을까
1. ES6를 사용한다면 var 키워드를 사용하지 않기
2. 재할당이 필요한 경우에만 let 사용,이 때 변수의 스코프는 최대한 좁게 만든다
3. 변경이 발생하지 않고 읽기전용으로 사용하는 원시 값과 객체에는 const 사용(우선 const사용하고 나중에 let으로 바꾸자.)

***

## 프로퍼티 어트리뷰트(Property Attribute)
### 내부 슬롯과 내부 메서드
* 내부슬롯과 내부메서드는 자바스크립트 엔진의 내부 로직이므로 원칙적으로 직접적으로 접근하거나 호출할 수 있는 방법은 없다.
* 다만, 일부 내부 슬롯과 내부 메서드에 한해서 간접적으로 접근할 수 있는 수단을 제공한다.
```javascript
 const o={};
//o.[[Prototype]]                         * 내부 슬롯인 [[Prototype]]은 접근할 수 없지만
o.__proto__  //   -> Object.prototype     * __proto__ 를 통해 간접적으로 접근할 수 있다.
```

### 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체
* 자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 ``프로퍼티 어트리뷰트``를 **기본값**으로 **자동 정의**한다.
  * 프로퍼티 상태란? 
    * 프로퍼티의 값<sup>value</sup> ->```[[Value]]```
    * 값의 갱신 가능 여부<sup>writable</sup> -> ``[[Writable]]``
    * 열거 가능 여부<sup>enumerable</sup> -> ``[[Enumerable]]``
    * 재정의 가능 여부<sup>configurable</sup> -> ``[[Configurable]]``
* 위의 상태들은 내부슬롯이기 때문에 ``Object.getOwnPropertyDescriptor``메소드로 간접적으로 확인할 수 있다.
    ```javascript
    const person = {
      name : 'Lee',
    };
    
    // 프로퍼티 동적 생성 
    person.age = 20;
    
    // 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 디스크립터 객체를 반환한다.
    // 존재하지 않는 프로퍼티나 상속받은 프로퍼티에 대한 디스크립터를 요구하면 undefined를 반환한다.
    // Object.getOwnPropertyDescriptors는 모든 프로퍼티의 정보를 디스크립터 객체로 반환(ES8)
    // Object.getOwnPropertyDescriptor는 하나의 프로퍼티에 대한 디스크립터 객체를 반환 
    console.log(Object.getOwnPropertyDescriptors(person));
    
    /*
    {
      name : {value: "Lee", writable: true, enumerable: true, configurable: true},
      age : {value: 20, writable: true, enumerable: true, configurable: true},
    }
    */
    ```
### 데이터 프로퍼티와 접근자 프로퍼티
* 프로퍼티는 데이터 프로퍼티와 접근자 프로퍼티로 구분
  * 데이터 프로퍼티 : 키와 값을 구성된 일반적인 프로퍼티
  * 접근자 프로퍼티 : 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수로 구성된 프로퍼티  
    * 접근자 함수 = getter/setter 함수 -> 접근자 프로퍼티는 게터와 세터 함수를 모두 정의할 수도,하나만 할 수도 있다.(자바게터세터같음)
    ```javascript
    const person = {
        // 데이터 프로퍼티
        firstName : 'dokuny',
        lastName : 'Lee',
        
        // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
        // getter 함수
        get fullName(){
            return `${this.firstName} ${this.lastName}`;
        },
        // setter 함수
        set fullName(name){
            // 배열 디스트럭처링 할당
            [this.firstName, this.lastName] = name.split(' ');
        }   
    };
    
    // 데이터 프로퍼티를 통한 프로퍼티 값의 참조
    console.log(person.firstName+' '+person.lastName); // dokuny Lee
    
    // 접근자 프로퍼티를 통한 프로퍼티 값의 저장
    // 접근자 프로퍼티 fullName에 값을 저장하면 setter함수가 호출된다
    person.fullName = 'dokuny Lee';
    console.log(person); // {firstName: "dokuny", lastName:"Lee"}
    
    // 접근자 프로퍼티를 통한 프로퍼티 값의 참조 
    // 접근자 프로퍼티 fullName에 접근하면 getter함수가 호출된다
    console.log(person.fullName); // dokuny Lee
    ```
    
### 프로퍼티 정의
* 새로운 프로퍼티를 추가하면서 프로퍼티 어트리뷰트를 명시적으로 정의하거나, 기존 프로퍼티의 어트리뷰트를 재정의하는 것을 의미
* Object.defineProperty메서드 사용
```javascript
const person ={};

// 데이터 프로퍼티 정의
Object.defineProperty(person,'firstName',{
    value : 'Dokuny',
    writable : true,
    enumerable : true,
    configurable : true
});
// 디스크립터 객체의 프로퍼티를 누락함(프로퍼티 정의시 어트리뷰트를 전부 적지 않으면 적지 않은 어트리뷰트는 누락되어버려 undefined,false 처리 된다.)
Object.defineProperty(person,'lastName',{
    value:'Lee'
});

descriptor = Object.getOwnPropertyDescriptor(person,'lastName');
console.log('lastName', descriptor);
// lastName {value : "Lee", writable: false, enumerable : false, configurable :false} 적지않은 어트리뷰트는 누락되어 false처리

// [[Enumerable]]의 값이 false인 경우
// 해당 프로퍼티는 for...in 문이나 Object.keys 등으로 열거할 수 없다.
console.log(Object.keys(person)); // ["firstName"]

// [[Writable]]의 값이 false인 경우, 해당 프로퍼티의 [[Value]]값을 변경할 수 없다.
// 이때 , 값을 변경하면 에러는 발생하지 않고 무시된다.
person.lastName = 'Kim';

// [[Configurable]]의 값이 false인 경우 해당 프로퍼티를 삭제할 수 없다.
// 삭제하면 에러발생없이 무시된다
delete person.lastName;

// 또한, 재정의 할 수 없다
// Object.defineProperty(person, 'lastName', {enumerable:true});
// 위 처럼 정의하면 에러발생

// 접근자 프로퍼티 정의
Object.defineProperty(person, 'fullName', {
    //getter 함수
    get() {
        return `${this.firstName} ${this.lastName}`;
    },
    
    //setter 함수
    set(name){
        [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable : true,
    configurable : true
});
```
* Object.defineProperty 메소드로 프로퍼티 정의할 때 디스크립터 객체의 프로퍼티를 일부 생략가능
  * value,get,set -> 생략시 undefined
  * writable,enumerable,configurable -> 생략시 false
* Object.defineProperty는 한번에 하나의 프로퍼티만 정의
* Object.defineProperties는 한번에 여러개의 프로퍼티를 정의

### 객체 변경 방지
* Object.preventExtensions 메서드 : 객체확장금지(프로퍼티추가 X,삭제는 가능)
* Object.seal 메서드 : 객체 밀봉(프로퍼티 추가,삭제,어트리뷰트 재정의 X,프로퍼티 값 읽기와 쓰기만 가능)
* Object.freeze 메서드 : 객체 동결(프로퍼티 값 읽기만 가능)
* 위의 세개는 얕은 변경방지로 직속 프로퍼티만 변경이 방지되고 중첩 객체까지는 영향을 주지 못한다.
* 중첩 객체까지 해주려면 직접 전부 해줘야함

***
## 생성자 함수에 의한 객체 생성
### Object 생성자 함수
* new 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환
* 빈 객체에 프로퍼티 또는 메소드를 추가
    ```javascript
    const person = new Object();
    person.name = 'dokuny';
    person.sayHello = function(){
        console.log('Hi! My name is '+ this.name);
    }
    ```
### 생성자 함수
1. 객체 리터럴에 의한 객체 생성 방식의 문제점
   * 한번에 하나의 객체만 생성할 수 있다.
   * 따라서, 동일한 프로퍼티를 갖는 객체를 여러개 생성해야할 경우 같은 프로퍼티를 반복배서 기술해야하기에 비효율적
2. 생성자 함수에 의한 객체 생성방식의 장점
   * 함수를 클래스처럼 사용하여 간편하게 동일한 객체 여러개 생성가능
   ```javascript
    // 생성자 
    function Circle(radius){
        // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
         this.radius =radius;
         this.getDiameter = function(){
           return 2 * this.radius;
         };
    }
   
   // 인스턴스의 생성 new 연산자 이용
   const circle1 = new Circle(5); // 반지름 5인 Circle객체 생성
   const circle2 = new Circle(10); // 반지름 10인 Circle객체 생성
   
   // new 연산자가 없는 경우
   const circle3 = Circle(15); // 일반 함수로서 호출된 것임, 명시적인 return값이 없으므로 undefined
   ```
3. 생성자 함수의 인스턴스 생성 과정
* new 연산자와 함께 생성자 함수를 호출하면 자바스크립트 엔진은 밑의 과정을 통해 암묵적으로 인스턴스를 반환한다.
    1. 인스턴스 생성과 this 바인딩
       * 암묵적으로 빈 객체가 생성되고 이 인스턴스는 ``this``에 ``바인딩 (식별자와 값을 연결하는 과정)``된다
    2. 인스턴스 초기화
       * 생성자 함수에 기술되어 있는 코드가 한 줄씩 실행되어 ``this``에 바인딩되어 있는 인스턴스를 초기화한다.
    3. 인스턴스 반환
       * 생성자 함수 내부의 모든 처리가 끝나면 (완성된 인스턴스가 바인딩된) ``this``가 암묵적으로 반환된다.
       * 만약 this가 아닌 ``다른 객체``를 명시적으로 반환하면 this가 반환되지 못하고 return문에 명시한 객체가 반환된다.
       * 그러나 명시적으로 ``원시 값``을 반환하면 원시 값 반환은 무시되고 암묵적으로 this가 반환된다.
       * 이러한 this가 아닌 다른 값을 반환하는 것은 지양하고 return문을 반드시 생략할 것 
4. 내부 메서드 ``[[Call]]``과 ``[[Construct]]``
    * 함수는 객체이므로 일반객체와 동일하게 동작(내부메서드와 내부슬롯을 가지고 있기 때문)
    ```javascript
    function foo(){}
   
    // 함수는 객체이므로 프로퍼티 소유 가능
    foo.prop = 10;
    
    // 함수는 객체이므로 메서드 소유 가능
    foo.method = function(){
        console.log(this.prop);
    };
   
    foo.method();  // 10
    ```
    * 일반 객체는 호출할 수 없지만, 함수는 호출할 수 있다.
    * 일반객체의 내부슬롯,내부메서드 + 함수로서 동작하기 위해 함수 객체만 가지고 있는 ``[[Environment]],[[FormalParameters]]``등 의  
    내부 슬롯과 ``[[Call]].[[Contruct]]``같은 내부메서드를 추가로 가지고 있음
    * 일반 함수로 호출되면 ``[[Call]]``이 호출 -> Callable
    * new연산자와 함께 생성자 함수로서 호출되면 ``[[Contruct]]``가 호출 -> Constructor
    * 객체를 생성자 함수로서 호출할 수 없는 함수 = non-constructor
    * 호출할 수 없는 객체는 함수객체가 아니므로 모든 함수 객체는 Callable이다. -> 모든 함수는 ``[[Call]]``을 가지고 있다
    * 하지만 모든 함수 객체가 ``[[Constructor]]``를 갖는 것은 아니다.  -> non-constructor가 존재하기 때문


5. constructor와 non-constructor 구분
    * constructor : 함수 선언문,함수 표현식,클래스
    * non-constructor : 메서드(메서드 축약표현),화살표 함수
    ```javascript
    // 일반 함수 정의 : 함수 선언문,함수 표현식
    function foo(){}
    const bar = function(){};
    // 프로퍼티의 값으로 할당된 것은 일반 함수로 정의된 함수다. 메서드로 인정하지 않는다
    const stic = {
        x: function(){}  // 일반함수 O, 메서드 X, constructor 존재
    };
   
    new bar();
    new foo();
    new stic.x();
   
    // 화살표 함수 정의
    const arrow = () =>{};
    new arrow(); // 타입에러 발생
   
    const obj = {
        x(){}
    };
   
    new obj.x(); // 타입에러
    ```
   
6. new 연산자
    * 일반 함수와 생성자 함수에 특별한 형식적 차이는 없다. new 연산자 붙이면 똑같이 생성자 함수로 동작
    * 일반 함수인데 객체를 반환하지 않으면 return문이 있어도 무시되고 빈 객체를 생성하여 반환한다.
    * 객체를 반환하면 생성자 함수처럼 작동

7. new.target
   * new 연산자와 함께 생성자 함수로서 호출되면 함수 내부의 new.target은 함수 자신을 가리킨다.
   * new 연산자 없이 일반 함수로 호출된 함수내부의 new.target은 undefined다 
   * IE는 지원하지 않는다
   ```javascript
    function Circle(radius){
        // 이 함수가 new 연산자와 함께 호출되지 않았다면 new.target은 undefined다.
        if(!new.target){
            //new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환한다.
            return new Circle(radius);
        }
        this.radius = radius;
        this.getDiameter = function(){
            return 2*this.radius;
        }
    }
   
   // new 연산자 없이 생성자 함수를 호출하여도 new.target을 통해 생성자 함수로서 호출된다
    const circle = Circle(5);
    console.log(circle.getDiameter());
   ```
   * IE같이 new.target을 못쓴다면
   ```javascript
    function Circle(radius){
          if(!(radius instanceof Circle)){ // 이렇게 작성하자.
             return new Circle(radius);
          }
          this.radius = radius;
          this.getDiameter = function(){   
            return 2*this.radius;
          }
   }
    const circle = Circle(5);
    console.log(circle.getDiameter());
   ```
   
***

## 함수와 일급 객체
### 일급 객체
* 조건
  1. 무명의 리터럴로 생성할 수 있다(런타임에 생성이 가능하다)
  2. 변수나 자료구조(객체,배열 등)에 저장할 수 있다
  3. 함수의 매개변수에 전달될 수 있다
  4. 함수의 반환값으로 사용할 수 있다

### 함수 객체의 프로퍼티
1. arguments 프로퍼티
   * 함수 객체의 arguments 프로퍼티 값은 arguments 객체다.
   * 함수 호출 시 전달된 인수들의 정보를 담고 있는 순회가능한<sup>iterable</sup> 유사 배열 객체이며 지역변수처럼 사용된다.(외부에서 참조못함)
   * ES3부터 표준에서 폐지, ``arguments 객체``를 참조하도록 한다.
   * 함수를 정의할 때 선언한 매개변수는 함수 몸체 내부에서 변수와 동일하게 취급
     * 함수 호출 -> 암묵적으로 매개변수 선언 -> undefined초기화 -> 인수 할당
   * 매개변수 개수보다 인수가 적으면 매개변수는 undefined 유지, 인수가 더 많으면 초과된 인수는 무시
     * 초과된 인수는 arguments객체의 프로퍼티로 보관된다(모든 인수가 보관된다)
     * arguments 객체는 ``가변인자 함수``를 구현할 때 유용하다
     ```javascript
        function sum(){
            let res = 0;
            
    
            // arguments 객체는 length 프로퍼티가 있는 유사 배열 객체이므로 for문으로 순회가능
            for(let i =0; i<arguments.length;i++) {
                res += arguments[i];
            }
            
            return res
        } 
   
        console.log(sum());      // 0
        console.log(sum(1,2));   // 3
        console.log(sum(1,2,3)); // 6
     ```
   * arguments 객체는 실제 배열이 아닌 유사배열객체(length 프로퍼티를 가진 객체로 for문 순회가능)
   * 그래서 배열 메서드는 사용 못함,사용하려면 간접호출을 통해서 사용
   * 하지만 ES6부터 ``...``라는 ``Rest 파라미터``를 도입해서 사용가능 -> arguments 객체 대신 사용가능
    ```javascript
    function sum(...args){ // Rest 파라미터
        return args.reduce((pre,cur)=>pre+cur,0);
    }
   
    console.log(sum(1,2));        // 3
    console.log(sum(1,2,3,4,5));  // 15
    ```
   
2. length 프로퍼티
   * 함수 객체의 length 프로퍼티는 함수를 정의할 때 선언한 ``매개변수의 개수``를 가리킴
    ```javascript
    function foo(){}
    console.log(foo.length); // 0
   
    function bar(x){}
    console.log(bar.length); // 1
    ```
    * arguments 객체의 length는 argument의 개수고,함수 객체의 length는 parameter의 개수임


3. name 프로퍼티
   * ES5와 ES6에서 동작이 다르다.(비표준이다가 ES6에서 정식표준 되었기 때문)
     * 익명 함수 표현식의 경우 ES5는 name 프로퍼티가 빈 문자열 값을 갖는다.
     * ES6에서는 함수 객체를 가리키는 식별자(변수 이름)를 값으로 갖는다.
    ```javascript
    // 기명 함수 표현식
    var nameFunc = function foo() {};
    console.log(nameFunc.name); // foo
   
    // 익명 함수 표현식
    var anonymousFunc = function(){};
    console.log(anonymousFunc.name); // anonymousFunc , ES5에서는 빈 문자열
   
    // 함수 선언식
    function bar(){};
    console.log(bar.name); // bar
    ```

4. ``__proto__`` 접근자 프로퍼티
    * 모든 객체는 ``[[Prototype]]``이라는 내부 슬롯을 가진다. -> 상속을 구현하는 프로토타입 객체를 가리킴
    * ``__proto__``프로퍼티는 내부 슬롯이 가리키는 프로토타입 객체에 접근하기 위해 사용하는 접근자 프로퍼티 


5. prototype 프로퍼티
   * 생성자 함수(constructor)만 가지고있는 프로퍼티
   * 일반 객체나 non-constructor에는 없다
   * 함수가 생성자 함수로 호출 될 때, prototype프로퍼티는 함수가 생성하는 인스턴스의 프로토타입 객체를 가리킨다.
***
   
## 프로토 타입
### 객체지향 프로그래밍
* 실체는 특징이나 성질을 나타내는 속성<sup>attribute/property</sup>을 가지고 있다
* 이러한 속성 중에 필요한 속성만을 간추려 내어 표현하는 것을 추상화<sup>abstraction</sup>라 한다.
* 속성을 통해 여러 개의 값을 하나의 단위로 구성한 복합적인 자료구조를 객체라 한다.
* 객체지향 프로그래밍은 독립적인 객체의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임
* 객체 = 상태(state=property) + 동작(be-havior=method)


### 상속과 프로토타입
* 생성자 함수로 생성하는 객체(인스턴스)는 프로퍼티 값을 직접 바꿔주지 않는 이상 동일한 프로퍼티값을 가지고 있다.
  * 이는 만약 동일한 메소드를 사용하는 객체라면 불필요하게 메소드까지 중복하여 소유한다는 것을 의미한다.
  * 이러한 불필요한 중복을 ``프로토타입``을 기반으로 ``상속``을 구현하여 제거한다.
    ```javascript
    // 그냥 사용
    function Circle(radius){
        this.radius = radius;
        this.getArea = function(){
            return Math.PI * this.radius ** 2;
        }
    }
		
    const c1 = new Circle(1);
    const c2 = new Circle(2);
    
    // 동일한 Constructor로 생성된 객체의 객체 프로퍼티는 같아보여도 다른 값(ref)을 지닌다.
    // 원시타입 프로퍼티는 값이 동일하면 동일함.
    console.log(c1.getArea === c2.getArea); // false
    ```
  
    ```javascript
    //프로토타입 방식
    function Circle(radius){
        this.radius = radius;
    }
    
    // 프로토타입에 추가하는 법(생성자 함수의 prototype 프로퍼티에 바인딩시키기)
    Circle.prototype.getArea = function(){
        return Math.PI * this.radius ** 2;
    };
    
    const c1 = new Circle(1);
    const c2 = new Circle(2);
    
    console.log(c1.getArea === c2.getArea); // true
    ```
    
## 프로토타입 객체(프로토타입)
* 객체 간 상속을 구현하기 위해 사용
* 어떤 객체의 상위 객체의 역할을 하는 객체로서 다른 객체에 공유 프로퍼티를 제공한다.
* 하위 객체는 상위 객체의 프로퍼티를 자신의 프로퍼티처럼 자유롭게 사용가능
* 객체가 생성될 때 객체 생성 방식에 따라 프로토타입이 결정되고 ``[[Prototype]]``에 저장된다
* 모든 객체는 하나의 프로토타입을 갖는다
* 모든 프로토타입은 생성자 함수와 연결되어 있다.

### ``__proto__`` 접근자 프로퍼티
* 모든 객체는 ``__proto__``접근자 프로퍼티를 통해 자신의 프로토타입``[[Prototype]]``에 간접적으로 접근할 수 있다.
* ``[[Get]]``,``[[Set]]``프로퍼티 어트리뷰트로 구성된 프로퍼티임
* ``__proto__`` -> getter / setter -> ``[[Prototype]]`` 방식으로 작동한다.
    ```javascript
    const obj={};
    const parent = { x : 1};
    
    // getter 함수인 get __proto__가 호출되어 obj 객체의 프로토타입을 획득
    obj.__proto__;
  
    // setter 함수인 set __proto__가 호출되어 obj 객체의 프로토타입을 교체
    obj.__proto__ = parent;  // obj의 프로토타입을 parent로 설정
    
    console.log(obj.x); // 1
    ```
* ``__proto__``는 Object.prototype의 프로퍼티다.모든 객체는 상속을 통해 사용할 수 있다.
* 프로토타입 체인은 단방향 링크드로 구현되어야 한다.
  * 부모가 자식 상속하고,자식이 부모 상속하고 그러는 순환참조를  ``__proto__``가 체크 후 방지하고 교체하도록 도와준다.
* 코드 내에서 직접 사용하는 것은 권장되지 않는다.
  * 모든 객체가 ``__proto__`` 를 사용할 수 있는 것은 아니기 때문(직접상속 등)
  * 대신 Object.getPrototypeOf,Object.setPrototypeOf 사용을 권장
  ```javascript
    const obj ={};
    const parent = { x : 1 };
    
    // obj 객체의 프로토타입 획득
    Object.getPrototypeOf(obj); // obj.__proto__;
  
    // obj 객체의 프로토타입을 교체
    Object.setPrototypeOf(obj,parent); // obj.__proto__ = parent;
  
    console.log(obj.x); // 1
  ```
  
### 함수 객체의 prototype 프로퍼티 
* 함수 객체만이 소유하는 prototype 프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다.
  ```javascript
    // 함수 객체는 prototype 프로퍼티를 소유
    (function (){}).hasOwnProperty('prototype'); // true
    
    // 일반 객체는 prototype 프로퍼티를 소유 X
    ({}).hasOwnProperty('prototype'); // false;
  ```  
* non-constructor인 화살표 함수와,ES6 메서드 축약표현으로 정의한 메서드는 prototype 프로퍼티를 소유하지 않는다.(프로토타입생성 X)
* 생성자 함수를 호출하는 것이 목적이 아닌 일반 함수도 prototype프로퍼티를 소유하지만 아무런 의미가 없다.
* 모든 객체가 가진 ``__proto__``와 함수 객체가 가진 ``prototype``은 결국 동일한 프로토타입을 가리킨다.
  * 사용하는 주체만 다름 (모든객체/생성자 함수)
  ```javascript
    function Person(name){
        this.name = name;
    }
  
    const me = new Person('Lee');
        
    console.log(Person.prototype === Person.__proto__); // true  
  ```
  
***
### 리터럴 표기법에 의해 생성된 객체의 생성자 함수와 프로토타입
* 생성자 함수에 의해 생성된 인스턴스는 프로토타입의 constructor 프로퍼티에 의해 생성자 함수와 연결된다.
* 이때, constructor가 가리키는 생성자 함수는 인스턴스를 생성한 생성자 함수
    ```javascript
    function Person(name){
        this.name=name;
    }
    
    const me = new Person('Lee');
    console.log(me.constructor === Person); // true
    ```
* 리터럴 표기법에 의해 생성된 객체도 프로토타입이 존재
  * 그러나, constructor프로퍼티가 가리키는 생성자 함수가 객체를 생성한 생성자 함수라고 단정할 수 없다.


***
## Strict Mode
* 전역의 선두 또는 함수 몸체의 선두에 ``'use strict';``를 추가
* 잠재적인 오류를 방지하기 위함
* 전역이나 함수단위로 적용하는 것은 비추천
* 즉시실행함수로 감싼 스크립트 단위로 적용하는 것이 바람직

### strict mode가 발생시키는 에러
1. 암묵적 전역(선언하지 않은 변수 참조)
2. delete 연산자로 변수,함수,매개변수의 삭제
3. 매개변수 이름의 중복
4. with 문의 사용(with문은 보통 사용을 잘안함)

### strict mode 적용에 의한 변화
1. 함수를 일반 함수로서 호출하면 this에 undefined가 바인딩된다.(생성자 함수가 아닌 일반 함수 내부에서는 사용할 필요가 없기 때문)
2. 매개변수에 전달된 인수를 재할당하여 변경해도 arguments객체에 반영되지 않음

***