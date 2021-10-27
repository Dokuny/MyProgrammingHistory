#EL(Expression Language)
### EL
* EL을 쓰면 ``<%= %>`` 에 request.getAttribute해서 불러다가 쓸 필요 없이 ``${}`` 중괄호 안에 키이름 불러다가 자바 쓰듯이 하면된다.
```jsx
request.setAttribute("cnt",30); // request.getAttribute("cnt") =  ${cnt}

List list = new ArrayList(){...}; // 리스트나 배열의 경우
request.setAttribute("list",list);  // ((List))request.getAttribute("list").get(0) = ${list[0]}

Map n = new HashMap("title","제목"); // 맵의 경우
request.setAttribute("n",n); // ((Map)request.getAttribute("n").get("title") = ${n.title}
```

* EL은 page,request,session,application에 저장되어있는 값을 불러올 수 있음


* 여기서 우선순위가 존재
  * page -> request -> session -> application 순으로
  * page에 없다면 request를 찾아보고 여기도 없다면 session, 없다면 application 찾아보고
  * 넷에 중복된 키워드가 있다하더라도 앞서서 먼저 찾으면 뒤에 있는 거는 찾지 않는다.(오류가 발생안함)
  * 가장 먼저 찾은 키워드 값을 사용


* 만약 특정 저장소에서 찾고 싶다면?
  * 아래의 한정사를 사용하면된다.
    * pageScope
    * requestScope
    * sessionScope
    * applicationScope
    ```jsx
     // 만약 result라는 값을 전부 가지고 있다면?
     ${pageScope.result}; // page에 있는 result 값을 호출
     ${requestScope.result}; // request에 있는 result 값을 호출
    ```    
    

* 그 외에도 EL은 다른 객체들의 값도 얻어낼 수 있다(예시)
  * param : ``${param.cnt}``
  * paramValues 
  * header : ``${header.host}``,``${header["host"]}``
  * headerValues 
  * cookie
  * initParam
  * pageContext : ``${pageContext.request.method}``

### EL 연산자
* []
* ()
* ``not`` = !
* empty : null이거나 빈문자열일 경우 true,not empty는 값이 유효할 경우 ``&{empty param.n} , &{not empty param.n}``
* \*, ``/`` = div, ``%`` = mod
* +,-
* ``<,>,<=,>=``  이거랑 lt gt le ge 랑 동일함
* ``== ,!=``  = eq ne랑 동일함
* ``&&`` = and
* ``||`` = or
* ? :


* EL문 안에서 정수를 정수로 나눌 시(3/2) 값은 실수(1.5)로 나온다.