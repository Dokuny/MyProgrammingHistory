# JSTL(JSP Standard Tag Library)
## 태그 라이브러리의 표준화
* Core
* Formating
* Functions
* SQL -> 쓰지않는게 좋음
* XML -> 쓰지않는게 좋음
***
### JSTL Core
```jsx
// 사용하기 위해서는 이렇게 지시자를 통해 JSP 페이지 상단에 선언을 해야한다.
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core %>
```
* 주요 기능
  * ``<c:set>`` : 변수 선언,할당
    * scope 속성 : 범위 4가지(page, request, session, application), scope 생략시 pageScope
    * var 속성 : 값을 저장할 변수
    * 선언된 변수는 ``${count}``와 같이 EL태그로 사용하면 된다.
    ```jsx
    int count = 5; // 아래와 동일
    <c:set var="count" value="5" scope="session"/>
    ```
  * ``<c:out>`` : 출력
    * ``escapeXml``이 false이면 태그 인식, true면 문자로 인식, 기본값은 true 
    * default 값 설정 가능
    ```jsx
    <c:out value="<h3>hello</h3>" escapeXml="true"/> // 페이지엔 <h3>hello</h3> 그대로 출력
    <c:out value="<h3>hello</h3>" escapeXml="false"/> // 페이지엔 hello 로 출력
    
    <c:out value="${param.name}" default="도쿤"/> // param.name의 값이 없을 경우 defalut값이 출력
    ```
  
  * ``<c:remove>`` : 변수 삭제
    * scope 속성
    ```jsx
    // 삭제시 scope를 지정하지 않으면 모든 scope의 동일 이름의 변수를 제거
    <c:remove var="count" scope="session"/>
    ```
  * ``<c:if>`` : if문, else문 역할
    * test 속성 : 조건식
    ```jsx
    <c:set var="value1" value="9" scope="page"/>
    <c:set var="value2" value="3" scope="page"/>
   
    <c:if test="${value1 >= value2}">
        <h3>value1이 큽니다.</h3>
    </c:if>
    ```
  * ``<c:choose>`` : switch 문
    * ``<c:when>`` : case 문
    * ``c:otherwise`` : default 문
    ```jsx
    <c:choose>                        // switch(no){
        <c:when test="${ no == 1 }">  // case 1 : 
            <h3>안녕하세요</h3>         
        </c:when>

        <c:when test="${ no eq 2 }">  // case 2 :
            <h3>반갑습니다.</h3>        
        </c:when>

        <c:otherwise>                 // default :
            <h3>환영합니다.</h3>
        </c:otherwise>
    </c:choose>
    ```
    
  * ``c:forEach`` : for문
    * var : 사용할 변수명
    * items : Collection 객체
    * begin : 시작 index, 기본값은 0
    * end : 종료 index, 기본값은 items 크기-1
    * step : 증감 수
    * varStatus : 반복상태를 알 수 있는 변수
    ```jsx
    <c:forEach var="item" items="${list}" begin=0 end=5 step=1 varStatus="status"> 
         번호 : ${status.count} 
         이름 : ${item.name} 
         나이 : ${item.age} 
         주소 : ${item.addr} 
    </c:forEach>
    ```

  * ``<c:forTokens>`` : 문자열을 토큰으로 분리 처리할 때 사용(``split()``과 동일) 
    ```jsx
    <c:forTokens  var="name" items="홍길동,김철수,박영희" delims=",">
         <p><c:out value="${name}"/></p>
    </c:forTokens>
    ```
    
  * ``<c:redirect>`` : 페이지 이동
  * ``<c:param>`` : 파라미터 전달
  ```jsx
  // p1.jsp
  <c:redirect url="p2.jsp">
          <c:param name="name" value="Lee"/>
          <c:param name="location" value="Seoul"/>
  </c:redirect>
  
  
  // p2.jsp
  <html>
  <head>
          <title>P2</title>
  </head>
  <body>
      ${param.name}<br/>  
      ${param.location}
  </body>
  </html>	
  ```
  
  * ``<c:url>`` : 링크 설정 정보를 별도 지정시 사용,param을 통해 값을 넘길 수 있음
    ```jsx
    <c:url var="fmtlink" value="testJstlCoreResult.jsp">
        <c:param name="num" value="77"></c:param>
    </c:url>

    <a href="${ fmtlink }">결과화면 연결</a>
    ```