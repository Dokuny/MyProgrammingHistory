# MVC
* 디자인 패턴 중 하나  
* Model , VIew , Controller의 약자
* 도메인(비즈니스)로직과 UI로직을 분리하여 유지보수를 독립적으로 수행할 수 있게 하는 장점
![MVC 흐름](https://mblogthumb-phinf.pstatic.net/MjAxNzAzMjVfMjUw/MDAxNDkwNDM4NzI4MTIy.4ZtITJJKJW_Nj1gKST0BhKMAzqmMaYIj9PobYJMFD4Ig.xTHT-0qyRKXsA4nZ2xKPNeCxeU2-tLIc-4oyrWq5WBgg.PNG.jhc9639/mvc_role_diagram.png?type=w800)
***

## WEB 과 MVC
1. 사용자가 웹사이트에 접속한다. 
2. Controller는 사용자가 요청한 웹페이지를 서비스 하기 위해서 모델을 호출한다. 
3. 모델은 데이터베이스나 파일과 같은 데이터 소스를 제어한 후에 그 결과를 리턴한다.
4. Controller는 Model이 리턴한 결과를 View에 반영한다. 
5. 데이터가 반영된 VIew는 사용자에게 보여진다. 

요약 : Users -> contorller -> model ->controller -> view -> users

## Model
* 애플리케이션의 정보, 데이타
* 이러한 DATA, 정보들의 가공을 책임지는 컴포넌트
* ``DTO``와 ``DAO``로 분류
* 사용자가 편집하길 원하는 모든 데이터를 가지고 있어야 한다
* 다른 구성요소(view,controller)에 대한 어떠한 정보도 몰라야한다.

### View
* UI 요소
* 데이터 및 객체의 입력, 그리고 보여주는 출력을 담당(사용자들이 볼 수 있는 화면)
* view는 model에서 전달받은 정보를 출력만 할 뿐 따로 저장하지 않아야한다.
* model과 마찬가지로 다른 구성요소를 몰라야한다.

### Controller
* 데이터와 UI를 잇는 다리역할
* 프로그램의 작동 순서나 방식을 제어
* 사용자가 데이터를 클릭하고, 수정하는 것에 대한 "이벤트"들을 처리하는 부분
* 다른 구성요소에 대해 알고 있어야한다(중재하기 위함)
* 다른 구성요소의 변경을 모니터링 (model이나 view에서 변경사항 발생 시 구성요소들로부터 전달받은 변경 통지를 해석해 각각의 구성요소에 통지)


#### Reference
[큰돌의 터전](https://m.blog.naver.com/jhc9639/220967034588)  
[ljinsk3](https://velog.io/@ljinsk3/MVC-%ED%8C%A8%ED%84%B4)  
[생활코딩](https://opentutorials.org/course/697/3828)