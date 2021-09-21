# CSS
***
## 스타일과 스타일 시트
### 스타일 형식 
  ```css
  p {text-align: center;color: blue}
  /* 선택자 { 속성1: 속성값1; 속성2: 속성값2} */ 
  ```   
  * 선택자는 스타일을 어떤 태그에 적용할 것인지 알려주는 것
  * 속성과 값이 하나의 스타일규칙, ;으로 구분해서 스타일 규칙 여러개 지정가능
  * 주석은 /*, */로 처리

### 스타일 시트
  
* 스타일 규칙을 한눈에 확인하고 필요할 때마다 수정하기 쉽도록 한 곳에 모아놓은 것
* 종류
  * 브라우저 기본 스타일
  * 사용자 스타일
    * ``인라인 스타일`` : 해당 태그 안에 style 속성 넣어서 사용(간단한 스타일일 경우)
    ```html
    <p style="color:blue;"></p> 
    ```
    * ``내부 스타일 시트`` : 사용할 스타일을 같은 문서 안에 정리,``<head>``안에 ``<style>``로 작성
    ```html
      <head>
          <meta charset="UTF-8">
          <title>제목</title>
          <style>
              h1{
                  padding:10px;
                  background-color: darkred;
              }
          </style>
      </head>
      ```
    * ``외부 스타일 시트`` : 따로 저장해 놓은 스타일 정보, *.css 확장자 사용,``<head>``안에 ``<link>``로 연결
    ```
    <link rel="stylesheet" href="외부 스타일 시트 파일 경로">
    ```

***
### CSS 기본 선택자
* ``전체`` 선택자 : 스타일을 문서의 모든 요소에 적용, * 사용
  ```
  * {속성: 값;}
  ```
* ``타입`` 선택자 : 특정 태그를 사용한 모든 요소에 스타일을 적용
  ```
  태그명 {스타일 규칙}
  
  p {font-style:italic}
  ```
* ``클래스`` 선택자 : 특정 부분만 선택해서 스타일 적용,클래스 이름을 사용해서 같은 태그라도 구분지어서 스타일을 적용할 수 있음
  ```
  .클래스명 {스타일 규칙} 
  
  예시) .accent {border:1px}
  ```
  * 태그 안에 class ="클래스명" 넣어서 사용,한 요소에 클래스 2개 이상 사용가능(공백으로 구분해서 넣는다)
  ```html
  <h1 class="accent bg"> <!-- accent클래스와 bg클래스가 있을 경우 -->
  ```
* ``id`` 선택자 : 클래스 선택자와 동일하나 ``한번만 적용`` 가능, 태그 안에 id속성으로 사용가능
  ```
   #아이디명 {스타일 규칙}
   
   예시) #container {width:500px} 
   
   태그에서 사용될 때) <div id="container">
  ```
* 그룹 선택자 : 같은 스타일 규칙을 사용하는 선택자들을 묶어서 사용
  ```
  선택자1,선택자2 {스타일 규칙}
  ```

## 케스케이딩 스타일 시트(CSS)
* 스타일 시트에서 우선순위가 위에서 아래로 적용된다는 의미(웹요소에 둘 이상의 스타일 적용 시)
  * 스타일 우선순위 : 스타일 규칙의 중요도와 적용범위에 따라 우선선위가 결정,우선순위에 따라 위에서 아래로 적용
    ```
    중요도 순
     1. 사용자(user) 스타일 -> 2.제작자 스타일 -> 3.브라우저 기본 스타일 순으로 우선순위 결정
    
    적용범위 순
     1. !important(스타일규칙에 붙임) -> 2.인라인 스타일 -> 3.id 스타일 -> 4.클래스 스타일 -> 5. 타입 스타일
    
    작성순서 순
     위에서 아래로, 동일한 선택자의 경우 덮어 씌움 
    ``` 
  * 스타일 상속 : 태그의 포함 관계에 따라 부모요소의 스타일을 자식요소로, 위에서 아래로 전달,배경색과 배경이미지는 상속 X

  
### 글꼴 관련 스타일
  * font-family : 사용할 글꼴 지정,값으로 예비용인 폰트 여러개 나열 가능
  * font-size : 폰트 크기
  * font-style : italic,oblique,normal
  * font-weight : 글자 굵기, 100~900사이
  
### 웹 폰트 사용
* 웹 폰트를 사용하려면 웹문서를 작성할 때 글꼴 정보를 함께 저장
* @font-face 속성사용
  ```
  @font-face {
    font-family : '글꼴이름';
    src = 글꼴 파일;
  }
  ```
* @import 사용 : [구글폰트사이트](fonts.goodle.com) 에서 가져와서 사용

### 텍스트 관련 스타일
* color : 텍스트 색상
* text-align : 텍스트 정렬
* line-height : 줄 간격 조절,텍스트를 세로로 정렬
* text-decoration : 텍스트의 줄을 표시하거나 없애줌(취소선,밑줄 등)
* text-shadow : 텍스트에 그림자 효과
* text-transform : 텍스트의 대소문자 변환
* letter-spacing,word-spacing : 글자 간격,단어 간격 조절

### 목록 스타일
* list-style-type : 불릿 모양과 번호스타일 지정
  * 불릿 모양(ul) : disc,circle,square
  * 번호스타일(ol) : deicimal,decimal-leading-zero, lower|upper-roman|alpha,none(순서없는 목록)
* list-style-image : 불릿 대신 이미지 사용  
  ``list-style-image: url(파일이미지 경로)|none``
* list-style-position : 불릿이나 번호의 위치를 들여써줌(inside,outside)
* list-style : 목록 속성을 한꺼번에 표시(위에 있는거 전부 한번에 표시가능)  
  `` 예시) list-style : lower-alpha inside``

### 표 스타일
* caption-side : 표 제목의 위치를 지정(top,bottom)
* border : 표 테두리 그려줌
* border-spacing : 셀 사이의 여백 지정
* border-collapse : 표와 셀 테두리 합쳐줌(collapse,separate)

***
## CSS 박스 모델(레이아웃 구성)
* 블록 레벨 요소 : 태그를 사용해 요소를 삽입했을 때 혼자 한 줄을 차지하는 것(너비100%),옆에 다른요소가 올 수 없음
  * ``<h1>``,``<div>``,``<p>`` 등
* 인라인 레벨 요소 : 콘텐츠 영역만큼만 차지

### 박스모델
* 박스모델 = 박스형태인 요소
  * 블록레벨요소는 모두 박스형태
* 구성
  * 콘텐츠 영역
  * padding : 박스와 콘텐츠 영역 사이의 여백
  * margin : 여러 박스 모델 사이의 여백
  * border : 박스의 테두리
* 속성
  * width,height : 콘텐츠 영역의 크기를 지정(크기,백분율,auto)
  * box-sizing : 박스 모델의 크기 계산(border-box(테두리까지 포함),content-box(콘텐츠 영역만,기본값))
  * box-shadow : 박스 모델에 그림자 효과 부여
### 테두리 스타일 지정
* 박스 모델 방향순서 : top -> right -> bottom -> left 
* border-style : 테두리 스타일 지정
  * solid : 실선
  * dotted : 점선
  * dashed : 짧은 직선
  * 그 외 더있음
* border-with : 테두리 두께, 입력할 때 방향 순서대로 10px 10px 10px 10px 이런식으로 설정 가능
* border-color : 테두리 색상
* border : 테두리 스타일 묶어 지정,나열해서 작성
* border-radius : 둥근 테두리로 만들어줌,이미지를 원 형태로 만들 수 도 있음(반지름 값을 너비나 높이의 50%로 지정)
* border-top|bottom-left|right-radius : 꼭짓점마다 따로 둥글게 처리

### 여백 조절 속성
* margin : 요소 주변의 여백을 설정
  * margin이용해서 웹문서 전체 정렬 가능
  * 마진중첩(overlap,collapse): 요소를 세로로 배치할 때 큰 마진쪽으로 작은 마진이 합쳐지는것(위아래 margin만 해당)
* padding : 콘텐츠와 테두리 사이의 여백(테두리 안쪽의 여백)

### 웹 문서 레이아웃
* display : 블록레벨 요소와 인라인 레벨요소를 서로 바꿔서 사용하게 해줌,내비게이션 만들때 사용
  * block,inline,inline-block,none
* float : 왼쪽이나 오른쪽으로 배치해줌, 그 다음에 넣는 다른 요소에도 똑같은 속성 전달 
* clear : float 속성 해제

### 웹 요소의 위치 지정
* position : 배치 방법지정
  * static : 문서의 흐름에 맞춰 배치,기본값
  * relative : 위칫값을 지정할 수 있는 점을 제외하면 static 과 동일
  * absolute : relative 값을 사용한 상위 요소를 기준으로 위치를 지정해 배치
  * fixed : 브라우저 창을 기준으로 위치를 지정해 배치
* left,right,top,bottom : 기준 위치와 요소 사이에 정한 방향으로 얼마나 떨어져 있는지 지정

***
## 이미지
### 배경색과 배경범위 지정
1. background-color : 배경색을 지정하는 속성(상속불가)
2. background-clip : 배경색의 적용범위 설정
   * border-box : 기본값
   * padding-box
   * content-box

### 배경 이미지 지정
1. background-image : 배경을 이미지로,배경을 넣을때 요소보다 이미지가 작으면 이미지가 가로와 세로로 반복되며 배경을 가득 채움
   ```css
    background-image:url('이미지파일 경로');
   ```
2. background-repeat : 배경 이미지 반복방법 지정
   * repeat : 기본값,가로세로로 가득찰 때 까지 반복
   * repeat-x : 가로로 반복
   * repeat-y : 세로로 반복
   * no-repeat : 한번만 표시
3. background-position : 배경 이미지 위치 조절
  ```css
   background-position : 수평위치 수직위치;
  ```
  * 값을 하나만 지정하면 지정한 값을 수평위치로 지정,수직위치는 50%나 center로 간주
  * 키워드 : left,center,right / top,center,bottom
  * 백분율 : 왼쪽모서리 기준 퍼센트 이동 후 이미지들어감
  * 길이 값 : 적은 px혹은 단위 만큼 이동후 이미지 왼쪽 상단 모서리를 맞춤
4. background-origin : 배경이미지 적용범위 조절
   * content-box
   * padding-box
   * border-box
5. background-attachment : 배경이미지 고정
   * scroll : 기본값, 스크롤 시 배경이미지도 같이 스크롤
   * fixed : 배경이미지는 고정되고 내용만 스크롤된다.
6. background : 위에 있는 모든 속성 하나로 묶어서 사용
7. background-size : 배경이미지 크기 조절
   * auto : 기본값,원래배경이미지 크기만큼 표시
   * contain : 요소 안에 배경이미지가 다 들어오도록 이미지 확대,축소
   * cover : 배경이미지로 요소를 모두 덮도록 확대,축소
   * 크기 : 크기 직접 지정
   * 백분율 
***
   
## CSS 고급 선택자
### 연결 선택자
1. 하위 선택자 : 부모 요소에 포함된 하위 요소를 ``모두`` 선택
   ```css
    setion p { } /* 상위요소 하위요소 공백 한 칸으로 구분 */
   ```
2. 자식 선택자 : 하위 선택자와 다르게 자식 요소에만 스타일 적용
  ```css
    section > p { } /* 부모요소>자식요소 */
  ```
3. 인접 형제 선택자 : 형제 요소 중에 첫번째 동생요소만 선택
  ```css
    h1 + p { } /* 요소1+요소2 */
  ```
4. 형제 선택자 : 뒤에 나오는 모든 형제요소선택
  ```css
    h1~p { } /* 요소1 ~ 요소2 */
  ```

### 속성 선택자
1. ``[속성]`` 선택자 : 속성값에 따라 원하는 요소를 선택
  ```css
    a[href] { } /* []안에 속성넣어서 사용, 요소 중에 href 속성이 있는 요소 선택*/
  ```
2. ``[속성=속성값]`` 선택자 : 특정 속성값이 있는 요소 선택
  ```css
    a[target=_blank]{ } 
  ```
3. ``[속성~=값]`` 선택자 : 여러 값중에서 특정 속성값이 포함된 속성요소를 선택
  ```css
    [class ~= button] { } /* 정확히 값과 일치하는 요소만 선택(-가 붙거나 buttons 처럼 s가 붙거나 이런 요소는 선택X */
  ```
4. ``[속성|=값]`` 선택자 : 지정한 값과 정확히 일치하거나 지정한값을 포함한 -으로 연결된 단어도 선택
  ```css
   a[title |= us]{ } 
  ```
5. ``[속성^=값]`` 선택자 : 속성값이 정확히 일치하지 않더라도 지정한 속성값으로 ``시작``하는 요소를 선택
  ```css
    a[title^=eng]{ } /* 속성값이 english이면 선택받는다 */ 
  ```
6. ``[속성$=값]`` 선택자 : 특정한 값으로 끝나는 속성의 요소 선택
  ```css
   [href $= xls]{ } /* xls로 끝나는 속성 값 전부 선택,파일 확장자로 이용하기 편함 */
  ```
7. ``[속성*=값]`` 선택자 : 일부 속성값이 일치하는 요소 선택
  ```css
   [href*=w3]{ } /* w3이 포함만되어있다면 모두 선택 */
  ``` 

### 가상 클래스
1. 사용자 동작에 반응하는 가상 클래스
  * :link : 방문하지 않은 링크에 스타일 적용
  * :visited : 방문한 링크에 스타일을 적용
  * :hover : 특정요소에 마우스 포인터를 올려놓으면 스타일 적용
  * :active : 웹요소를 활성화 했을 때 스타일 적용(링크를 클릭하는 순간의 스타일을 적용)
  * :focus : 웹 요소에 초점이 맞추어졌을때(텍스트 필드에 마우스 포인터를 올려놓는다는 등)
  * 정의 순서 : ``:link -> :visited -> :hover -> :active`` 순으로 정의
2. 요소 상태에 따른 가상 클래스 
 * :target : 앵커 대상에 스타일을 적용,타겟 당하는 대상에다가 사용
   ```css
    #intro:target { } /* 여기서 intro는 a의 href속성 값  */
   ```
 * :enabled : 해당 요소가 사용할 수 있는 상태일 때 스타일 지정
 * :disabled : 요소가 사용할 수 없는 상태일 때 스타일 지정(요소가 disabled 속성일 때)
 * :checked : checked 속성이 있는 요소의 스타일 지정
 * :not : 특정요소를 제외하고 스타일을 적용
 * input태그 선택할 때 ``input:checked``이렇게 쓰던지 ``input[type=text]``이런식으로 불러야함.
 * :not의 경우는 ``input:not([type=radio])`` 이렇게 써야함
3. 구조 가상 클래스 : 웹문서의 구조를 기준으로 특정위치에 있는 요소를 찾아 스타일을 적용
 * :only-child : 부모 안에 자식요소가 하나뿐 일 때 자식요소 선택
 * A:only-type-of : 부모 안에 A 요소가 하나뿐 일 때 선택
 * :first-child : 부모 안에 있는 모든 요소 중에서 첫번째 자식요소 선택
 * :last-child : 부모 안에 있는 모든 요소 중에서 마지막 자식요소 선택
 * A:first-of-type : 부모 안에 있는 A 요소 중에서 첫번째 요소를 선택
 * A:last-of-type : 부모 안에 있는 A 요소 중에서 마지막 요소 선택
 * :nth-child(n) : 부모 안에 있는 모든 요소 중에서 n번째 자식 요소를 선택
 * :nth-last-child(n) : 부모 안에 있는 모든 요소 중에서 마지막에서 n번째 자식요소 선택
 * A:nth-of-type(n) : 부모안에 있는 A요소 중에서 n번째 요소를 선택
 * A:nth-last-of-type(n) : 부모 안에 잇는 A 요소 중에서 끝에서 n번째 요소 선택
4. 가상 요소
 * ::first-line : 첫번째 줄을 선택
 * ::first-letter : 줄에서 첫 번째 글자를 선택
 * ::before : 특정요소의 앞에 내용이나 스타일을 추가
 * ::after : 특정요소의 뒤에 내용이나 스타일 추가
 ***
 ## 트랜지션과 애니메이션
