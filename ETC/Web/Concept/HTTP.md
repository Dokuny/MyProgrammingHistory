# HTTP
***
### HTTP 란?
* Hyper Text Transfer Protocol의 약자
* HTML 문서를 교환하기 위해 만들어진 protocol
* TCP/IP 기반
***

### HTTP 핵심요소
1. HTTP 통신 방식
   * ``request/response`` 구조로 되어 있다
     * 클라이언트가 HTTP request를 서버에 보내면 서버는 HTTP response를 보내는 구조
     * 클라이언트와 서버의 모든 통신이 요청과 응답으로 이루어진다.
   * ``stateless``,``connectionless`` 다
     * 통신이 끝나면 상태를 유지하지 않는다
     * 클라이언트가 요청을 한 후 응답을 받으면 그 연결을 끊어버린다.
     * 즉,각각의 request/response는 독립적인 request/response다.
       * 클라이언트가 요청을 보내고 응답을 받은 후, 다시 요청을 보낼 때 전에 보낸 요청/응답에 대해 알지 못한다
       * ``쿠키``나 ``세션``을 통해 해결


2. HTTP Request 구조
   * 크게 3부분으로 구성  
     1. ``start line``
        * ``HTTP Method``
          * 해당 request가 의도한 action을 정의하는 부분
          * GET,POST,PUT,DELETE,OPTIONS 등
          * 주로 GET,POST가 쓰임
        * ``Request Target``
          * 해당 request가 전송되는 목표 URL
        * ``HTTP Version``
        
     2. ``headers``  
         * 해당 request에 대한 추가 정보를 담고 있는 부분  
         * key:value 형식  
         ```
         HOST: google.com => Key = HOST, Value = google.com
         ```
         * 자주 사용되는 헤더 정보  
           * HOST : 요청이 전송되는 target의 host url: 예를 들어, google.com (요청을 보내는 서버의 도메인,request target과 합쳐지면 완벽한 주소가 된다)
           * User-Agent : 요청을 보내는 클라이언트의 대한 정보 : 예를 들어, 웹브라우저에 대한 정보  
           * Accept : 해당 요청이 받을 수 있는 응답(response) 타입  
           * Connection : 해당 요청이 끝난후에 클라이언트와 서버가 계속해서 네트워크 커네션을 유지할 것인지 아니면 끊을 것인지에 대한 지시  
           * Content-Type : 해당 요청이 보내는 메세지 body의 타입. 예를 들어, JSON을 보내면 application/json  
           * Content-Length: 메시지 body의 길이    
           
        3. ``body``  
            * 해당 request의 실제 메세지/내용
            * body가 없는 request도 존재(GET request들은 대부분 body가 없는 경우가 많다)
           

3. HTTP Response 구조
   1. ``Status line``
      * Response의 상태를 간략하게 나타내주는 부분
        1. HTTP 버전
        2. Status code: 응답 상태를 나타내는 코드
        3. Status text : 응답 상태를 간략하게 설명해주는 부분
        ```
        HTTP/1.1 404 Not Found
        ```
   2. ``Headers``
      * request의 headres와 동일
      * 다만 response에서만 사용되는 header 값들이 존재 (User-Agent 대신 Server 헤더가 사용되는 등)
   3. ``Body``
      * request의 body와 일반적으로 동일
      * 데이터를 전송할 필요가 없는 경우 body는 비어있게 된다.
      
***
### HTTP Methods
1. ``GET``
   * 데이터를 서버로 부터 받아(get)올 때 주로 사용하는 Method
   * 데이터 생성/수정/삭제 없이 받아오기만 할 때 사용


2. ``POST``
   * 데이터를 생성/수정/삭제할 때 주로 사용되는 Method


3. ``OPTIONS``
   * 주로 요청 URI에서 사용할 수 있는 Method를 받아올 때 사용


4. ``PUT``
   * 데이터를 생성할 때 사용되는 Method
   * 최근 몇년 사이에 POST에 밀려서 잘 사용하지 않는 추세


5. ``DELETE``
   * 특정 데이터를 서버에서 삭제 요청을 보낼 때 쓰이는 Method
   * PUT과 마찬가지로 POST에 밀려서 잘 사용하지 않는 추세
   
***
#### 출처
https://velog.io/@mokyoungg/HTTP-HTTP-%EA%B5%AC%EC%A1%B0-%EB%B0%8F-%ED%95%B5%EC%8B%AC-%EC%9A%94%E3%85%85