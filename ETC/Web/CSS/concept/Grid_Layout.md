# 그리드 레이아웃(Grid Layout) 정리
### 그리드 레이아웃 특징
* 시각적으로 안정된 디자인
* 업데이트가 편한 웹 디자인 구성
* 자유로운 요소 배치

### Flexible box layout 방식
  * 수평이나 수직 중 하나를 선택하여 '주축'으로 삼고 주축 기준으로 요소배치
### CSS grid layout 방식
  * 수평과 수직 어느방향이든 배치(레고처럼)
***
## Flex Box Layout
### 플렉스 박스 레이아웃에서 사용하는 용어
  * 플렉스 컨테이너(부모박스) : 레이아웃을 적용할 대상을 묶는 요소
  * 플렉스 항목(자식박스) : 레이아웃을 적용할 대상
  * 주축(main axis) : 플렉스 항목을 배치하는 기본 방향
    * 기본방향 : 왼쪽 -> 오른쪽
    * 주축 시작점 : 기본방향 기준 맨 왼쪽 모서리,배치가 시작되는 위치
    * 주축 끝점 : 맨 오른쪽 모서리,배치가 끝나는 위치
  * 교차축(cross axis) : 주축과 교차하는 방향
    * 기본방향 : 위 -> 아래
    * 교차축 시작점 : 맨 위 모서리 (주축시작점과 동일),배치가 시작되는 위치
    * 교차축 끝점 : 맨 아래 모서리,배치가 끝나는 위치

### 플렉스 박스 항목을 배치하는 속성(컨테이너에서 사용)
* justify-content : 주축 방향 정렬
  * flex-start : 시작점부터 시작
  * flex-end : 끝점부터
  * center : 중앙
  * space-between : 첫 항목과 끝 항목을 시작점과 끝점에 배치하고 나머지는 그 사이에 같은 간격으로 배치
  * space-around :   주축에 같은 간격으로 배치
* align-items : 교차축 방향 정렬
  * flex-start
  * flex-end
  * center
  * baseline : 문자 기준선에 맞춰 배치(문자크기별로 항목크기가 달라짐)
  * stretch : 항목을 늘려 교차축에 가득차게 배치
* align-self : 교차축에 있는 개별항목 정렬,``플렉스 항목``에서 사용
* align-content : 여러 줄일 때 교차축 정렬 방법 지정 
  * flex-start  
  * flex-end 
  * center
  * space-between
  * space-around
  * stretch



* ``display`` : 플렉스 컨테이너 지정,부모요소에다가 설정
  * flex : 컨테이너 안의 플렉스 항목을 블록 레벨 요소로 배치
  * inline-flex : 인라인 레벨 요소로 배치


* flex-direction : 플렉스 주축 지정
  * row : 가로,좌우,기본값
  * row-reverse : 가로,우좌
  * column : 세로,상하
  * column-reverse : 세로,하상
* flex-wrap : 플렉스 항목 줄바꿈 여부
  * nowrap : 한 줄 표시, 기본값
  * wrap : 여러 줄 표시
  * wrap-reverse : 여러 줄 표시,시작점과 끝점 바뀜(줄바뀜이 상하->하상)
* ``flex-flow`` : direction과 wrap 한번에 지정, row nowrap이 기본값

***
## CSS grid layout
* 그리드 항목에 배치할 때 가로와 세로를 모두 사용(2차원)
* 가로(row)과 세로(column)로 웹화면을 구성

### CSS 그리드 레이아웃 항목을 배치하는 속성
* display : 그리드 컨테이너를 지정
  * grid : 항목을 블록레벨요소로 배치
  * inline-grid : 인라인 레벨 요소로


* grid-template-columns : 몇 개의 칼럼을 배치할지, 각 칼럼의 너비를 얼마로 할지
* grid-template-rows : 줄 높이
  * ``fr (상대적인 크기 지정)``단위 사용하는 것이 좋음
  * repeat() : 값이 반복될 때 줄여서 표현할 수 있는 함수
  * minmax() : 크기 최솟값,최댓값 지정 
  * auto-fill,auto-fit : 자동으로 칼럼 개수 조절
  ```css 
     grid-template-columns : 200px 200px 200px; /* 너비가 200px인 칼럼 3개 */
     grid-template-rows : 100px; /* 줄 높이, 여러줄이 될 경우 각각 100px가 된다. */
   
     grid-template-columns : 1fr 1fr 1fr; /* 너비가 같은 칼럼 3개 배치 */
     grid-template-columns : 2fr 1fr 2fr; /* 2:1:2 비율 3개 배치 */
     
     grid-template-columns : repeat(3,1fr); /* 1fr 3번 반복 */
     grid-template-rows : minmax(100px,auto); /* 줄높이 최소값,최댓값 auto시 자동적으로 글 작성한 만큼 늘어남*/
  
     /* 화면너비에 따라 칼럼 개수 조절 */
     grid-template-columns : repeat(autofit,minmax(200px,1fr); /* 남는 공간 없이 화면에 가득차게 */
     grid-template-columns : repeat(autofill,minmax(200px,1fr); /* 안에 들어있는 컨텐츠 크기만큼만 */
  ```
* grid-column-gap : 칼럼과 칼럼사이의 간격을 지정
* grid-row-gap : 줄과 줄 사이의 간격을 지정
* grid-gap : 칼럼과 줄사이의 간격을 한번에 지정(칼럼간격,줄간격 순서)

### 그리드 라인을 이용해 배치하기
* 그리드 레이아웃은 눈에 보이지 않는 그리드라인이 포함되어 있다
* 칼럼이 3개면 칼럼 그리드라인은 4개 (맨왼쪽 오른쪽 각각하나,칼럼 사이 마다 1개씩 총 4개)
* 줄도 동일
* 라인이용하여 배치하는 속성
  * grid-column-start : 칼럼 시작의 라인 번호를 지정
  * grid-column-end : 칼럼 마지막의 라인 번호를 지정
  * grid-colunm : 칼럼 시작 번호와 끝번호 지정 (시작번호/끝번호)
  * grid-row-start
  * grid-row-end
  * grid-row
### 템플릿영역을 만들어 배치하기
 * grid-area 속성 : 템플릿 이름을 지정(항목에서 작성)
 * grid-template-areas : ""큰따옴표로 한줄에 들어갈 템플릿 영역을 묶고,빈영역은 마침표.넣기(컨테이너에 속성넣기)

