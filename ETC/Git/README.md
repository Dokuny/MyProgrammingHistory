## Git 개념 정리
***
### 형상관리
우선 형상 관리의 개념을 알아야하는데  
1. 변경 관리  
    소스의 변경사항을 관리


2. 버전 관리``(VCS, Version Control System)``  
    변경한 것을 효과적으로 관리하기 위하여 Version 단위로 관리하는 것


3. 형상 관리 ``(Configuration Management)``  
   위의 모든 관리개념이 포함되어있는 개념. 소프트웨어의 변경사항을 체계적으로 추적하고 통제하는 것. 프로젝트 전반적으로 매니징하는 성격이 강하다. 

대략적으로 이렇게 되어있다.  

형상 관리를 사용하는 목적은
1. 팀원들과 소스코드를 공유하여 서로 간의 버전 충돌 없이 수월하게 협업  


2. 기존 소프트웨어를 여러 개의 버전으로 나누어서 개발할 때 유용


3. 문제발생이나 기능적인 이유로 이전 버전으로 돌아가야할 시 소스코드 변경이력 관리를 통해 손쉽게 문제를 추적하고 이전 버전으로 돌아가기 위함

로 크게 볼 수 있다.

``Git``은 이러한 목적을 달성하기 위한 형상 관리 도구 중 하나이다.  
정확히는 ``분산 버전 관리시스템`` 으로 볼 수 있다.
***
### 버전관리
버전 관리에는 크게 세가지가 있는데 정리해보자면 이렇다.
1. 로컬 버전관리 ``(Local VCS)``  
    Server 없이 Local Computer 내에서 버전을 관리  
    아주 간단하지만 실수나 컴퓨터 고장에 취약하다.협업도 어렵다.
    대표적으로 ``RCS(Revision Control System)``이 있다.


2. 중앙집중식 버전관리 ``(CVCS,Centralized VCS)``  
    Server가 별도로 존재하며 Client가 중앙 Server에서 수정이 필요한 파일만을 다운(Checkout)받아 수정하는 방식  
    Local VCS 보다 관리가 쉽고 협업이 가능  
    하지만 중앙 server에 문제 발생하면 치명적이며 협업규모가 커지면 수정 충돌문제 등이 발생할 수 있다
    대표적으로 ``CVS(Concurrent Versions System)``,``SVN(Subversion)``,``Perforce`` 가 있다.

3. 분산 버전관리 ``(DVCS, Distributed Version Control System)``  
    CVCS와 마찬가지로 server가 존재하지만 필요한 부분만을 다운받는 것이 아닌 프로젝트 전체를 다운 받은 뒤 수정하는 방식  
    server에 문제가 생기더라도 프로젝트 전체를 가지고 있기 때문에 괜찮고 수정 시에도 충돌 염려가 없다.
    대표적으로는 ``Git``,``Mercurial``,``Bazaar`` 등이 있다.

분산 버전 관리 시스템 중 [가장 많이 사용](https://rhodecode.com/insights/version-control-systems-2016) 되는 것이 바로 ``Git``이다.  

***
### Git의 배경
``Git``이 만들어진 배경은 좀 독특하다  
``리누스 토르발스``라는 개발자는 당시 사용 가능했던 버전관리 시스템 중 자신을 만족시킬만한 것이 없었고 차선책으로 BitKeeper라는 프로그램을 사용했다.  
그러다가 BitKeeper에서 일부 리눅스 개발자들을 제한하는 일이 발생했는데, 여기서 그는 그냥 직접 버전관리시스템을 만들기로 결정한다.  
그가 버전관리 시스템은 빠른 속도로 일을 처리하며 협업이 가능해야 했고 우연이든 악의적이든 변질에 대비해 강력한 안전기준이 필요하다고 생각했기에 분산형 관리시스템을 채택했다.  

### Git의 특징

1. 팀원들이 복사된 프로젝트에서 동시에 작업을 진행하므로``분산 작업``이 효율적
2. 모든 작업이 대부분 로컬에서 진행되므로 ``가볍고 빠름``
3. 동일한 소프트웨어를 여러가지 버전으로 만드는``Branch``와 그걸 합치는 ``Merge``환경을 제공
4. Commit ID를 통한 ``무결성 보장`` 및 ``Version History 관리``
5. 준비영역``Staging area`` 을 통한 검토
6. ``오픈소스``
### Git과 GitHub의 차이  
``Git``은 변경이력을 관리해주고 같은 파일에 대한 각기 다른 버전을 로컬저장소에 보관해주는 소프트웨어이다.  
``GitHub``는  ``Git``의 원격 저장소의 개념으로 클라우드 방식으로 관리되는 일종의 ``Service``이다. GitHub는 원격 저장소를 제공하는 호스팅 업체인 것 이다.  
***




#### Reference  
[wikipedia](https://ko.wikipedia.org/wiki/%EA%B9%83_(%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4))
[yoongrammer](https://yoongrammer.tistory.com/17)  
[지식잡식](https://raisonde.tistory.com/entry/%EB%B3%80%EA%B2%BD%EA%B4%80%EB%A6%AC-%EB%B2%84%EC%A0%84%EA%B4%80%EB%A6%AC-%ED%98%95%EC%83%81%EA%B4%80%EB%A6%AC%EC%9D%98-%EC%B0%A8%EC%9D%B4)  
[탕이](https://medium.com/@what_learn/git%EC%82%AC%EC%9A%A9%EB%B2%95-5-git%EC%9D%98-%ED%8A%B9%EC%A7%95-216da8d443d7)


