## Git Working Flow
![flow](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile6.uf.tistory.com%2Fimage%2F237B984B58CE95E90BD98B)
* Object : git 은 기본적으로 키-값 (key-value) 저장소로 볼 수 있다. git 에 데이터를 추가 시, git 은 객체(object) 를 생성한 후 해당 객체 내용의 SHA-1 해시값을 key 로써 사용 
* Head : 현재 체크아웃된 커밋 = 현재 작업중인 커밋(작업트리의 가장 최근 커밋을 가르킴)
* Commit : 의미 있는 변화에 대해 기록
* Branch :  독립적으로 어떤 작업을 진행하기 위한 개념, 특정 커밋에 대한 참조(커밋들을 포함하는 작업내역)
* Tag :  특정 커밋을 태그, 읽기전용 커밋(수정불가)
순서 : 1 -> 2 -> 3

***
### Git 명령어 모음
[Dokun Blog](https://blog.naver.com/nestour/222502734439)

#### Reference  
[Web Club](https://webclub.tistory.com/317)  
[jungeundelilahLEE](https://velog.io/@delilah/GitHub-Git-%EB%AA%85%EB%A0%B9%EC%96%B4-%EB%AA%A8%EC%9D%8C)