### 깃허브에 파일올리기

1. git config를 통해 git에 깃허버 계정정보 설정
```markdown
$ git config --global user.name "Dokuny"   // "" 안에다가 깃허브 username 
$ git config --global user.email qweq@Test.com // 깃허브 계정에 등록된 이메일 적기
```
2. 원하는 로컬저장소로 이동 후 git init으로 git 저장소 생성
   * mkdir (폴더 경로)로 원하는 경로에 디렉토리 생성가능 


3. 로컬 저장소 안에 파일을 git add를 통해 staging area로 넣어준다(git이 파일을 track하도록 해주는 것)
    * 그 전에 git status로 파일 상태를 확인해주자
```markdown
$ git status
$ git add 파일명.확장자
```

4. git commit 을 통해 git 로컬저장소에 버전을 저장
```markdown
$ git commit -m "커밋시 입력할 메시지"
```

5. git remote 를 통해 깃허브 repository 세팅
    * 원격저장소 삭제는 git remote remove (단축 이름)
```markdown
$ git remote add (단축 이름) [깃허브 repository URL]
```

6. git push 로 올리기
```markdown
$ git push (원격저장소 이름) (브랜치 이름)
```
***




