# HTML

## 기본 구조

* `` <!DOCTYPE html>`` : 문서 유형을 지정(문서 유형이 html5라고 알려주는 것)
* ``<html></html>`` : HTML 파일의 시작과 끝을 표시, </html> 뒤에는 아무 내용도 없어야 함
* ``<head></head>`` : 웹 브라우저에 문서 정보를 알려주는 태그,
    * ``<meta>`` : 문자세트를 비롯한 문서 정보가 들어있는 태그,데이터에 관한 데이터,
    * ``<title></title>`` : 문서 제목, 들어가 있는 내용이 웹브라우저 제목표시줄에 표시된다
* ``<body></body>`` : 웹브라우저에 내용을 표시하는 태그,실제 웹브라우저 안에서 보여지는 곳

```html
<!Doctype html>
<html lang="ko">  <!-- lang =""은 언어 표시해주는 것-->
<head>
	<meta charset="UTF-8"> <!-- charset=""로 화면 글자 인코딩 지정,한글쓰려면 명시해줄 것-->
	<title> HTML 구조</title>
</head>
<body>
<!-- 주석-->
</body>
</html>
```

***

## 시맨틱 태그

* HTML의 태그는 이름만 봐도 의미를 알 수 있어 시맨틱(sementic)태그라고 한다.

### 웹 문서 구조 주요 시맨틱 태그

* ``<header></header>`` : 헤더영역,보통 맨위나 왼쪽에 위치,검색창이나 사이트메뉴 삽입
* ``<nav></nav>`` : 내비게이션 영역,같은 웹문서 안에서 다른위치로 연결하거나 다른 웹문서로 연결하는 링크를 만듬
* ``<main></main>`` : 웹 문서에서 핵심이 되는 내용 삽입,웹 문서에서 한번만 사용할 수 있음.
* ``<article></article>`` : 독립적인 콘텐츠를 담는 태그,블로그의 포스트 느낌,여러개 사용가능,안에다 ``<section>`` 넣을 수도 있음
* ``<section></section>`` : 콘텐츠 영역을 나타내는 태그, 몇 개의 콘텐츠를 묶는 용도
* ``<aside></aside>`` : 사이드 바 영역,필요한 경우에만 사용
* ``<footer></footer>`` : 웹문서 맨아래의 푸터영역,제작정보나 연락처,저작권 정보등을 넣음,안에다 다른 시맨틱 태그 모두 사용 가능
* ``<div></div>`` : 여러 소스를 묶는 태그, id나 class 속성으로 문서 구조 만들거나 스타일을 적용, 영역 구별
### 텍스트 입력 관련 태그들

* ``<h1~h6></h1~h6>`` : 제목, 1이 제일 크고 숫자가 커질수록 작아짐
* ``<p></p>`` : 단락,태그 앞뒤로 빈 줄 생김
* ``<br>`` : 줄바꿈
* ``<blockquote></blockquote>`` : 인용문,들여쓰기
* ``<strong><b></strong></b>`` : strong은 강조 볼드,b는 그냥 볼드처리 ->strong은 낭독기가 강조해서 읽어줌
* ``<em><i></em></i>`` : 이탤릭체(기울이기), em은 강조
* ``<abbr title="">`` : 줄임말, title="" 안에 원래 뜻을 쓰고, 태그사이에 줄임말 넣기
* ``<cite></cite>`` : 웹 문서나 포스트에서 참고 내용을 표시, 이탤릭체
* ``<code></code>`` : 소스코드 작성용
* ``<small></small>`` : 부가 정보처럼 작게 표시
* ``<sub><sup></sub></sup>`` : 아래첨자, 위첨자 표시
* ``<s></s>`` : 취소선 표시 
* ``<u></u>`` : 밑줄 표시
* ``<ins>`` : 공동작업문서에 새로운 내용 삽입,밑줄 표시로 알림 
* ``<del>`` : 공동작업문서에서 기존 내용 삭제,취소선으로 표시

### 목록(list) 태그
* ``<ol></ol>`` : ordered list, 순서대로인 목록 작성 + type=""으로 영문자 및 로마숫자로,start=""로 시작 번호 바꿀 수 있음
* ``<ul></ul>`` : unordered list, 순서가 중요하지 않은 목록 작성
* ``<li></li>`` : list, 위의 두 종류의 태그 안에 들어가 목록을 표시
* ``<dl></dl>`` : 설명목록(description list), 이름과 값 형태로 된 목록,dt와dd가 들어감
* ``<dt></dt>`` : 이름(단어명) 작성
* ``<dd></dd>`` : 값(설명) 작성

### 표(table) 태그
표는 행<sup>row</sup> 과 열<sup>column</sup> , 셀<sup>cell</sup>로 구성 
* ``<table></table>`` : 표의 시작과 끝을 알려주는 태그
* ``<caption></caption>`` : 표의 제목,``<table>`` 바로 아랫줄에 작성(생략가능)
* ``<tr></tr>`` : 행 작성
* ``<td></td>`` : 행 안에서 셀 작성, ``<tr>``태그 안에서 작성
* ``<th></th>`` : 제목 셀 작성,중앙정렬,볼드체,``<td>``대신 사용
* ``<thead></thead>`` : 표의 구조 중 제목
* ``<tbody></tbody>`` : 표의 구조 중 본문
* ``<tfoot></tfoot>`` : 표의 구조 중 요약
* ``rowspan="합칠 셀의 개수"`` : ``<td>``의 속성,행을 합침(위아래 셀 합침)
* ``colspan="합칠 셀의 개수"`` : ``<td>``의 속성,열을 합침(좌우로 셀 합침)
* ``<col>`` : 열을 1개만 선택,안에 속성 넣어서 사용(style="" 이런식),모든 열은 속성 없더라도 ``<col>``태그 작성해야함, span=""은 묶기 
* ``<colgroup></colgroup>`` : 태그 안에 ``<col>`` 두개 이상 묶어서 사용,열을 묶어줌,반드시 ``<caption>``다음에 작성


### 이미지 태그
* ``<img>`` : 이미지 삽입
  * ``src="이미지 파일경로"`` : 파일 경로 속성 
  * ``alt="대체용 텍스트"`` : 이미지 안뜰때 대신할 대체 텍스트
  * ``width="이미지 너비" height="이미지 높이"`` : 이미지 크기 조절,하나만 사용가능, %,px단위로 지정

### 오디오, 비디오 태그
* ``<object></object>`` : 모든 것 삽입 가능
  * ``<object width="너비" height="높이" data="파일"></object>``
* ``<embed>`` : HTML의 audio,video,object 태그를 지원하지 않을 경우 사용
  * ``<embed src="파일경로" width="" height="">``
* ``<audio src="파일 경로"></audio><video src="파일 경로"></video>`` : 오디오,비디오 파일삽입 
  * controls : 컨트롤 바 표시
  * autoplay : 자동 실행
  * loop : 반복 실행
  * muted : 소리 제거
  * width,height : 사이즈
  * preload="값" : 페이지를 불러올 때 오디오나 비디오 파일을 어떻게 로딩할 것인지 지정,값 = auto,metadata,none 
  * poster="파일 이름" : ``<video>``에서 사용하는 속성,비디오가 재생되기 전까지 화면에 표시될 포스터 이미지 지정

### 하이퍼링크
* ``<a></a>`` : 링크 만들기
  * ``<a href="링크할 주소"> 텍스트 또는 이미지(<img src="">로) </a>``
  * ``target="_blank"`` : 새 창으로 열어줌

*** 

## 입력 양식
### 폼(form) 태그
* ``<form [속성="속성값"]> 여러 폼 요소 </form>``
  * method : 사용자가 입력한 내용을 서버 쪽으로 어떻게 넘겨줄 것인지 지정, 값으로는 get,post 
  * name : 자바스크립트로 폼을 제어할 때 사용할 폼의 이름을 지정
  * action : 태그 안의 내용을 처리해 줄 서버 프로그램을 지정
  * target : action 속성에서 지정한 스크립트 파일을 현재 창이 아닌 다른 창에서 열도록 함
  * autocomplete : 자동완성기능 , on,off
* ``<fieldset><legend></legend></fieldset>`` : 하나의 폼안에서 여러구역을 나누어 표시 할때 fieldset사용,legend는 제목
* ``<lable></lable>`` : 입력란 가까이에 아이디나 비밀번호처럼 붙여놓은 텍스트
  * ```html
    <label> 레이블명 <input type ="속성값"></label>
    
    <lable for="id 값"> 레이블 명</lable>  <!-- for과 밑의 id 값은 동일해야함 -->
    <input type="속성 값" id="id 값">
    ```
    
### input 태그
* 다양한 폼에서 사용자가 입력한 정보를 받을 때 사용
* type 속성
  * text,password : 한 줄 짜리 텍스트,비밀번호 입력하는 텍스트 박스
    * size : 화면에 몇글자가 보이도록 할 것인지 지정(maxlength가 10인데 size가 5면 5개만 보임)
    * value : 텍스트 필드 요소가 화면에 보여질 때 텍스트 필드 부분에 보여주는 내용,사용안하면 빈 텍스트 필드가 표시,비밀번호에선 사용 X
    * maxlength : 입력할 수 있는 최대 문자 수
  * search,url,email,tel : 검색 입력 필드
  * checkbox,radio  : 주어진 여러 항목에서 2개 이상 선택 체크박스, 1개만 선택할 수 있는 라디오박스(라디오는 name속성 작성)
    * value : 선택한 체크박스나 라디오 버튼을 서버에게 알려 줄 때 넘겨줄 값 지정,영문이거나 숫자여야하며 필수 속성임
    * checked : 기본으로 선택해놓고 싶은 항목에 사용
  * number,range : 숫자조절 스핀박스,슬라이드 박스
    * 밑에 있는 애들은 시간에서도 사용 가능  
    * min : 최솟값 지정, 기본 0  
    * max : 최댓값 지정, 기본 100
    * step : 숫자 간격 지정, 기본 1
    * value : 필드에 표시할 초깃값
  * date,month,week : 사용자 지역 기준 연월일
  * time : 사용자 지역 기준 시,분,초,분할 초
  * datetime : 국제 표준 연,월,일,시,분,초,분할 초
  * datetime-local : 사용자 지역 기준 연,월,일,시,분,초,분할 초
  * submit,reset,button : 전송,리셋,일반 버튼
    * value : 버튼에 표시할 내용
  * image : submit 대신 사용할 이미지, src,alt 작성
  * file : 파일 첨부 버튼
    * file을 위한 form 속성
      * enctype : 전송되는 데이터 형식 설정
        * application/www-form-urlencoded : 디폴트값,폼데이터는 서버로 전송되기 전에 URL-Encode된다.
        * multipart/form-data : 파일이나 이미지를 서버로 전송할 경우 이 방식을 사용, 메소드는 post값으로 지정
        * text/plain :  인코딩을 하지 않은 문자 상태로 전송
      
  * hidden : 사용자에게는 보이지 않지만 서버로 넘겨주는 값이 있는 필드
    * name : 이름
    * value : 서버로 넘길 값
  

#### input태그 주요 속성
* autofocus : 자동으로 입력 커서를 가져다 놓음
* placeholder="힌트내용" : 힌트 표시(뭐 입력할지 알려주는 거)
* readonly : 읽기 전용
* required : 필수 입력 필드로 지정

### input 태그 외의 폼에서 사용하는 태그
* ``<textarea></textarea>`` : 텍스트를 여러줄 입력하는 영역 만듬(text태그 여러줄버전)
  * cols : 텍스트 영역의 가로너비를 문자 단위로 지정 
  * rows : 텍스트 영역의 세로길이를 줄 단위로 지정, 지정한 숫자보다 줄 개수가 많아지면 스크롤 막대가 생김


* ``<select></select>`` : 드롭다운 목록의 시작과 끝
  * size : 화면에 표시할 드롭다운 항목의 개수를 지정
  * multiple : 드롭다운 목록에서 둘 이상의 항목을 선택할 때 사용
* ``<option></option>`` : 드롭다운 원하는 항목 추가
  * value : 서버로 넘겨줄 값 지정
  * selected : 드롭다운 메뉴를 삽입할 때 기본적으로 선택해서 보여줄 항목 지정


* ``<button>`` : 폼을 전송하거나 리셋하는 버튼 삽입 input 하고 똑같음
  * submit : 폼을 서버로 전송
  * reset : 폼에 입력한 내용 초기화
  * button : 기능없는 버튼


***
## meta태그를 이용한 viewport 설정
* 모바일 웹 해상도는 viewport라는 <meta> 태그를 이용해서 설정 
* meta viewport는 IE10 모바일 브라우저(스냅 모드)를 제외한 나머지(안드로이드, 오페라 등) 브라우저는 적용되고 있다.
* 즉, 이 태그는 W3C의 표준이 아님.

```html
  <html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, 
  maximum-scale=1.0, minimum-scale=1.0">
  </head>
  <body>
    ....
  </body>
</html>
```

1. width=device-width
   * 사용자가 접속한 기기 화면의 넓이에 따라 웹사이트의 넓이를 맞추겠다는 것을 의미. 따라서 device-width는 100%의 크기로 화면에 출력
 
2. user-scalable=no
   * 사용자가 브라우저의 확대/축소를 불가능하게 하는 기능. yes와 no로 설정
3. initial-scale=1.0
   * 사용자가 처음 접속한 웹사이트 화면의 배율을 설정하는 기능. 1.0은 100%를 의미. 즉, 1보다 큰 값으로 적용하면 확대된 페이지로 표시
4. maximum-scale=1.0
   * 최대 배율을 의미하는 것으로 최대 크기를 설정. 1에서 10까지.
5. minimum-scale=1.0
   * 최소 배율을 의미하는 것으로 최소 크기를 설정. 1에서 10까지 

