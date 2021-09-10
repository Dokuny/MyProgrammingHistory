#IntelliJ 궁금증 해결(solving Curiosity)
***

### 인텔리 제이 파일이 빨간색인 이유(The reason why the IntelliJ files is red)
  * 파일 색깔별로 나타내는 상태가 다르다고 한다.
  * 빨간색은 수정하고 나서 깃허브에 푸시하지 않았을 때 그렇게 뜨는 듯  
[Details](https://blog.naver.com/nestour/222501747152)
***
### Git, ssh keygen (Permission denied (publickey) 에러 해결법)

깃허브에 있는걸 intelliJ로 clone하려는데 오류가 발생했다.
```
git permission denied (publickey). fatal: Could not read from remote repository. Please make sure you have the correct access rights and the repository exists
```


1. Git Bash 열기


2. ssh-keygen -t rsa -C "[본인의 Github 계정 이메일주소]" 입력


3. id_rsa 파일의 생성 (경로는 C:\Users\[사용자]/.ssh/id_rsa)


4. 비밀번호 입력을 원하면 비밀번호 입력, 아니면 Enter


5. SSH key 생성


6. Github에 Settings 메뉴 -> SSH keys -> New SSH key


7. .ssh 폴더에 id_rsa.pub 안에 있는 값 복사 후 SSH key 입력란에 붙여넣기

***