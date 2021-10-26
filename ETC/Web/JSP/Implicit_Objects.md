# 내장 객체

### 내장 객체란?

* JSP 내에서 선언하지 않고 사용할 수 있는 객체
* JSP가 서블릿 형태로 자동 변환될 때 코드 내에 자동으로 포함되는 멤버변수,메서드 매개변수 등의 각종 참조변수들을 말한다.
* 보통 스크립트릿 내부에서 사용한다.

```
작성된 JSP 코드는 서블릿으로 변환된 후 모두 _jspService() 메서드 안으로 들어가기 때문에 
메서드 매개변수인 request, response와 지역변수로 선언된 pageContext, application, page, config, out 등은 모두 내장객체가 된다. 
해당 내장객체들은 _jspService 메서드 부분에서 사용자가 작성된 코드 위에 자동으로 선언되고 초기화 되기 때문에 
JSP 파일에서 프로그램을 작성할 때 내장객체를 별도의 선언 없이 사용할 수 있는 것이다.
```

***

### 종류와 기능

* ``request``
    * 사용자 요청(input)과 관련된 기능을 제공하는 내장객체
    * 주로 클라이언트에서 서버로 전달되는 정보를 처리하려고 사용
    * 메서드
        * ``getParameterNames()`` : 현재 요청에 포함된 매개변수의 이름을 열거 형태로 리턴
        * ``getParameter(name)`` : 문자열 name에 매칭된 value를 리턴
        * ``getParamterValues(name)`` : 문자열 name에 매칭된 value를 배열 형태로 가져옴
        * ``getCookies()`` : 모든 쿠키 값을 javax.servlet.http.Cookie의 배열 형태로 리턴
        * ``getMethod()`` : 현재 요청방식이 GET인지 POST인지를 문자열로 반환
        * ``getSession()`` : 현재 세션 객체를 반환
        * ``getProtocol()`` : 현재 서버의 프로토콜을 문자열로 반환
        * ``getQueryString()`` : 현재 요청에 포함된 쿼리문자열을 반환
        * ``getRemoteAddr()`` :    클라이언트의 IP 주소를 리턴한다.
        * ``setCharacterEncoding()`` : 현재 JSP로 전달되는 내용을 지정한 캐릭터셋으로 변환해준다. HTML 폼에서 한글 입력을 정상적으로 처리하기 위해 필수


* ``response``
    * 사용자 응답(output)과 관련된 기능을 제공하는 내장객체
    * 사용자 요청(request)를 처리하고 응답을 다른 페이지로 전달하는 기능을 제공
        * 메서드
            * ``setContentType(type)`` : 문자열 형태의 type에 지정된 MIME Type으로 contentType을 설정한다.
                * 해당 메서드를 사용하게 되면 page 지시어에서 contentType을 이용해 지정된 MIME Type을 무시하고 새로운 MIME Type이 헤더로 전달된다.
            * ``sendRedirect(url)`` : 클라이언트 요청을 다른 페이지로 보낸다.
              ```
              !sendRedirect vs forward 액션
              결과만 보면 forward 액션과 거의 유사하지만 sendRedirect는 새로운 페이지를 위한 request, response 객체가 새로 생성되며
              forward 액션의 경우에는 원래 요청에 포함된 request와 response 객체가 포함되어 그대로 전달된다. 
              즉, a->b->c 이런식으로 요청이 진행된다 할 때, forward 액션을 사용하면 a에서 전달된 request 객체가 c까지 전달이 되지만,
              sendRedirect 메서드를 사용하면 b에서 c로 넘어갈 때 새로운 request, response 객체가 생성되어 값이 전달되지 않는다.
              ```
            * ``addCookie(cookie)`` : 클라이언트에게 전달할 쿠키를 설정
            * ``encodeURL(url)`` : URL로 유효하지 않은 문자를 인코딩
            * ``sendError(status,msg)`` : 클라이언트에게 에ㅋ러코드와 메시지를 전달


* ``out``
    * 출력 스트림으로써, 사용자 웹 브라우저로 출력하기 위한 채널
    * 스트립트릿에서 브라우저로 텍스트 출력하는 데 사용
    * out을 이용해서 출력된 내용은 서버의 콘솔이 아닌 사용자에게 전달된다.
    * 메서드
        * ``getBufferSize()`` : output buffer의 크기를 바이트로 알려준다.
        * ``getRemaining()`` : 남아 있는 버퍼의 크기 중 사용 가능한 비율을 알려준다.
        * ``clearBuffer()`` : 버퍼에 있는 콘텐츠를 모두 지운다.
        * ``flush()`` : 버퍼를 지우고 output stream도 비운다.
        * ``close()`` : output stream을 닫고 버퍼를 비운다.
        * ``println(content)`` : content의 내용을 newline과 함께 출력한다.
        * ``print(content)`` : content의 내용을 출력한다.


* ``session``
    * HTTP 프로토콜이 비연결형 프로토콜이라는 문제를 해결하기 위해 사용
    * 메서드
        * ``getId()`` : 세션 고유의 ID를 문자열 형태로 리턴
        * ``getCreationTime()`` : 세션 생성 시간을 January 1. 1970 GMT 부터 long 형 밀리세컨드 값으로 반환
        * ``getLastAccessedTime()`` : 현재 세션으로 마지막 작업한 시간을 ong형 밀리세컨드 값으로 반환
        * ``getMaxInactiveInterval()`` : 세션의 유지시간을 초로 반환
        * ``setMaxInactiveInterval(t)`` : 세션의 유효 시간을 t에 설정된 초 값으로 설정
        * ``invalidate()`` : 세션 종료
        * ``getAttribute(attr)`` : 문자열 attr로 설정된 세션 값을 Object 형태로 가져옴
        * ``setAttribute(name, attr)`` : 문자열 name으로 Object attr을 저장
        * ``removeAttribute(name)`` : 세션에 설정한 속성 값을 삭제


* ``config``
    * 서블릿이 최초로 메모리에 적재될 때 컨테이너는 서블릿 초기화와 관련된 정보를 읽고 javax.servlet.ServletConfig 객체에 저장
    * 웹 에플리케이션 하나에는 서블릿, JSP, 빈즈 클래스 등이 여러 개로 구성되는데 config 내장객체는 서로 독립적인 파일로 구성된 JSP나 서블릿들이 서로 다른 시점에 임의의 정보를 서로 교환할 수
      있는 기법 중 하나로 활용할 수 있다.
    * 기본적으로 web.xml 파일에 초기화 값을 등록해놓고 JSP에서 필요한 경우 config 내장객체를 이용해 참조하는 방법이 있다.
    * 메서드
        * ``getInitParameterNames()`` : 초기 매개변수 값들의 설정 이름을 열거 객체로 반환
        * ``getInitParameter(name)`` : 문자열 name에 해당하는 초기화 매개변수 값 반환


* ``application``
    * application은 웹 에플리케이션 전체를 관리하는 객체
    * application 객체를 통해 각 서블릿이나 JSP에서 공유하려고 하는 각종 정보를 설정하고 참조
    * 메서드
        * ``log(message)`` : 문자열 message의 내용을 로그 파일에 기록한다.
        * ``log(message, exception)`` : 예외 상황에 대한 정보를 포함하여 로그 파일에 기록한다.
        * ``getAttribute(name)`` : 문자열 name에 해당하는 속성 값이 있다면 Object 형태로 반환, 형변환이 필요하다.
        * ``getAttributeNames()`` : application 객체에 저장된 속성들의 이름을 열거 형태로 가져온다.
        * ``setAttribute(name,value)`` : 문자열 name의 이름으로 Object형 데이터를 저장한다.
        * ``removeAttribute(String name)`` : 문자열 name에 해당하는 속성을 삭제한다.


* ``exception``
    * 현재 페이지를 처리하다 발생하는 예외상황에 대한 정보를 가져올 수 있다.
    * 메서드
        * ``getMessage()`` : 문자열로 된 오류 메시지를 반환한다.
        * ``printStackTrace()`` : 스택 추적 정보를 출력한다.
        * ``toString()`` : 예외 클래스 이름과 함께 오류 메시지를 반환한다.

***

### 내장객체의 생명주기와 속성관리

* request, session, application의 생성 시점과 소멸 시점

  |내장객체|생성시점|소멸시점|
    |:---:|:---:|:---:|
  |request|해당 페이지 요청 시점|해당 페이지 로딩 완료 시점|
  |session |해당 컨텍스트 내 특정 파일 요청 시점|웹 브라우저 종료 or 일정시간 경과 시점|
  |application|웹 에플리케이션 시작 시점|웹 에플리케이션 종료 시점|

### MVC에서의 내장객체
```
MVC 패턴에 따르면 JSP는 뷰의 역할만 수행해야 한다. 
문제는 컨트롤러에서 처리한 데이터를 어떻게 JSP로 전달해야 하는 지에 대한 것이다. 
이때 JSP 내장 객체를 이용한 속성 관리가 사용된다. 
예를들어, 컨트롤러에서 처리한 데이터는 request.setAttribute()를 이용해서 저장하고 
화면에 보여질 JSP로 포워딩하면 해당 JSP에서는 request 내장객체를 통해 데이터를 참조할 수 있으므로
완전한 MVC 패턴을 구현할 수 있다.
```