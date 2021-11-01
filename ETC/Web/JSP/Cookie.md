# 쿠키
## 쿠키 메서드
```java
// setter
    Cookie c = new Cookie("key","value") // 여기서 value는 String 타입만 가능
    c.setMaxAge(365*24*60*60);           // 유효기간 초단위로 설정,예시는 1년 
    c.setPath("url")                     // 쿠키의 유효한 디렉토리 설정
    c.setDomain("domain")                // 유효한 도메인을 설정
    c.setSecure(true);                   // 쿠키의 보안을 설정    
    c.setComment("info")                 // 쿠키에 대한 설명을 설정
    c.setValue("dokun")                  // 쿠키의 값을 설정
    c.setVersion(3)                      // 쿠키의 버전을 설정

// getter
// 나머지 set 자리에 그대로 get 하면된다
    c.getName()                          // 쿠키의 이름을 알려준다.

// 다 설정했으면 보내면 된다.
    response.addCookie(c);
    
// 저장된 걸 가져올 땐
    Cookie[] cookies =request.getCookies(); // getCookies로 가져온다. 배열로 가져옴
    for(Cookie c : cookies){
        if(c.getName == "cookieName"){
            c.getValue();
            // 로직 작성, 이런식으로 특정 쿠키를 가져올 수도 있고 아니면 
            // setter에서 path등으로 미리 쓸 수 있는 곳을 정해줘서 처리할 수 도 있다.
        }
    }    
```