## DAO, DTO, VO 개념정리
### DAO (Data Access Objcet)
* Data 접근(사용)하기 위한 객체
* DB에 접근하는 로직과 비즈니스 로직을 분리하기 위해 사용
* 직접 DB에 접근하여 데이터를 ``CRUD`` 하는 기능을 전담
* ``MVC`` 패턴의 Model에서 이와 같은 일을 수행
<details markdown="1">
<summary>CRUD</summary> 

컴퓨터 소프트웨어가 가지는 기본적인 데이터 처리기능을 묶어서 이야기하는 것
* create
* read(or retrieve)
* update
* delete(or destroy)
</details>
  

***
### DTO (Data Transfer Objcet)
* Data를 전송(저장)하기 위한 객체
* 계층 간 (Controller, View, Business Layer) 데이터 교환을 위한 자바빈즈(Java Beans)를 의미
* 로직을 갖지 않고 getter,setter 메소드만을 가진다.
* 사용자가 입력한 값을 객체형태로 받을 수 있게 클래스 구성
* 가변적 성격
```
DB의 Data -> DTO로 변환 -> Service나 Controller등의 계층

Controller layer -> ResponseDTO로 변환-> Client
```
<details markdown="1">
<summary>자바 빈즈(Java Beans)</summary>        

* Java로 작성된 소프트웨어 컴포넌트를 지칭하는 단어
* 비즈니스 로직 부분을 담당하는 Java 프로그램 단위
* JSP페이지가 복잡한 자바 코드로 구성되는 것을 피할 수 있음
* 재사용 가능한 컴포넌트를 만들 수 있음
</details>

***
### VO(Value Object) 
* DTO와 동일하지만 Read-Only속성의 값을 위한 객체이다.
* getter의 기능만을 포함
* 핵심역할은 equals()와 hashcode()를 오버라이딩 하는 것
* BO (Business Objcet)는 비즈니스 로직을 포함하는 VO
* 불변적 성격

***



