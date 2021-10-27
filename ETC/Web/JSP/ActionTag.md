## Action tag
* JSP에서 객체 생성과 공유,페이지이동과 전달,태그 파일 작성 등에 필요한 기능을 제공하는 일종의 커스텀 태그
* 커스텀태그 기반이지만 별도의 taglib 지시어 사용없이 jsp 접두어를 사용
* 최근엔 JSP의 역할이 출소된 상황이라 실무활용이 권장되지 않는다.(알아만 둘 것)

### 주요 액션 태그
* jsp:param 
  * include,forward 사용 시 파라미터 값을 수정하거나 추가함
    * include나 forward할 페이지에 파라미터를 전달해줌.
    * 받는 쪽에서는 request.getParameter("name")로 받음,getAttribute 아님!!!!
  * param의 value 값에 한글을 넣었을 시 깨질 때는
    * ``value='<%=URLEncoder.encode("한글내용","UTF-8")%>'``
    * 이런식으로 처리해줘야 안깨진다.
    * 받는쪽에서는 ``<%=URLDEcoder.decode(request.getParameter("param의 name"),"UTF-8")%>`` 이런식으로 처리.
```jsx
// 생김새
<jsp:param name="" value=""/>
// 파라미터를 여러개 전달해야한다면 여러번 사용할 수 있다.
<jsp:param name="" value=""/>
<jsp:param name="" value=""/>
```
* jsp:forward
  * 현재 페이지를 다른 페이지로 전환할 때 사용(리디렉션과 유사)
  * request와 response 객체를 포함해서 다른 페이지로 포워드함
  * jsp:param태그와 같이 사용해서 다른 페이지에 데이터를 전달 가능
    ```jsx
    <jsp:forward page="second.jsp>
       <jsp:param name="id" value="abcd" />
       <jsp:param name="pw" value="1234" />
    </jsp:forward>
    ```
* jsp:include
  * jsp페이지 내에 다른 페이지를 삽입
  * 실행 중에 동적으로 포함시킴
  * ``<%@include%>``와 다른점은?
    * 지시자 include는 변수를 서로 공유할 수 있다. 컴파일할 때 현재페이지와 include지시자에 포함된 페이지가 합쳐진 상태로 컴파일하기 때문
    * 액션태그 include는 변수를 공유할 수 없다. 액션태그 include의 페이지와 현재페이지는 각자 별개로 컴파일 되기 때문
* jsp:useBean
  * 자바 빈즈 객체를 생성하거나 불러옴
  * JSP를 단순히 view 역할로만 사용한다면 사용할 일이 없다.
  * ``클래스 자바빈이름 = new 클래스();`` 와 동일한 의미
  * 구문
    * id : 자바 빈을 특정 scope에 저장하거나 가져올 때 사용하는 이름, 해당 인스턴스를 참조하기 위한 변수명
    * scope : 해당 클래스 타입의 객체를 저장하거나 가지고오는 범위로 내장 객체의 일부
    * class : 생성하거나 참조하려는 객체의 클래스명, 반드시 패키지명까지 명시, 추상클래스나 인터페이스는 사용못함
    * type : 특정 타입의 클래스를 명시할 때 사용,추상클래스,인터페이스,일반클래스가 될 수 있고 class 속성의 클래스에서 상속이나 구현이 이루어져야한다.
    * beanName : type과 beanName 사용을 통해 class 속성을 대체할 수 있다.
      ```jsx
      <jsp:usebean id="자바빈 이름" scope="page | request | session | application"
                   class ="packageName.className" type="packageName.className"
                   beanName = "packageName.className">
      </jsp:usebean>    
      ```
* jsp:setProperty
  * 자바빈 파일의 setter 메소드를 사용하기위해 사용(데이터 값을 설정할 때)
  * useBean 액션태그로 생성한 자바빈 객체에 대해서 프로퍼티(필드)에 대해 값을 설정할 수 있다
  * 프로퍼티 속성에 ``*``를 사용하면 전체 변수를 한번에 지정
  ```jsx
    <jsp:setProperty name="빈 이름" property="필드명" value="값" />
    <jsp:setProperty name="빈 이름" property="*" />
  ```
* jsp:getProperty
  * 자바빈 파일의 getter 메서드를 사용하기위해서 사용
  * 거의 사용되지않는다.
