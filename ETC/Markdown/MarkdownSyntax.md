#마크다운 문법 (Markdown Syntax)
***
###줄바꿈
문장 끝에 공백(space bar로)을 두번주고 enter를 누른다.  
```markdown
문장1(공백없음)
문장2  
문장a  (공백두칸존재)
문장b
```
문장1 
문장2  
문장a  
문장b
###문단 구분
엔터 두번눌러서 문단 간에 공백 한줄을 준다.

```markdown
문단A 
문단B

문단1

문단2
```
문단A
문단B

문단1

문단2
***
 ### 제목
```markdown
제목
======
부제목
------

# h1  -> # 한 개는 <h1>하고 같음
## h2  

#는 6개 까지 가능
```
제목
======
부제목
-----
# h1  
## h2 

---
###목록
```markdown
Unordered
* 목록1       
    * 목록 2  

ordered
1. 목록1
    1. 목록 2
```
Unordered
* 목록1
    * 목록 2

ordered
1. 목록1
    1. 목록2

---
###코드넣기
코드블록

<img height="90" src="C:\Users\uooy\Desktop\화면 캡처 2021-09-10 172429.png" width="500"/>

``` java  
public void printHello() {  
    System.out.println("hello world!");  
}  
```  

인라인 코드
```markdown
문장 중간에 `Code` 넣기  // ` ` 사용
```
문장 중간에 `Code` 넣기

***
### 하이퍼 링크

```markdown
[링크명](URL) 사용

[GitHub](http://github.com "깃허브") 
```
[GitHub](http://github.com "깃허브")
***
###인용구 상자
```markdown
김홍철: 

> 살어리살어리랏다.   // > 를 사용
```
김홍철:

> 살어리살어리랏다.
***
###강조
```markdown
*This text will be italic*   // *또는 _하나만 사용시 이탤릭체로 강조
_This will also be italic_ 

**This text will be bold**   // 두번 사용 시 볼드체로 강조 
__This will also be bold__ 

*You **can** combine them*   // 혼합사용 가능
```
*This text will be italic*  
_This will also be italic_

**This text will be bold**  
__This will also be bold__

*You **can** combine them*
***
###표만들기(Tables)
```markdown
First Header | Second Header  
------------ | -------------  
Content cell 1 | Content cell 2 
Content column 1 | Content column 2
```
First Header | Second Header
------------ | ------------- 
Content cell 1 | Content cell 2
Content column 1 | Content column 2
***
### 수평선(hr)
```markdown
--- 
*** 
___
```
--- 
*** 
___
***
