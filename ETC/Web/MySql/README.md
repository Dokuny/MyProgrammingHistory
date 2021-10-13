# MySQL
***
## SQL의 분류
* DML(Data Manipulation Language)
  * 데이터 조작(선택,삽입,수정,삭제) 언어
  * DML 구문의 대상은 테이블의 행
  * DML 사용 전에 테이블이 정의되어 있어야함
  * SELECT, INSERT, UPDATE, DELETE
  * 트랜잭션이 발생하는 SQL
    * 트랜잭션이란 테이블의 데이터를 변경할 때 실제 테이블에 완전히 적용하지 않고,임시로 적용시키는 것(취소가능)
  

* DDL(Data Definition Language)
  * 데이터 정의 언어
  * 데이터베이스,테이블,뷰,인덱스 등의 데이터 베이스 개체를 생성,삭제,변경하는 역할
  * CREATE ,DROP ,ALTER
  * 트랙잭션 발생 X
  * ROLLBACK 이나 COMMIT 사용 불가
  * 실행 즉시 MySQL에 적용

  
* DCL(Data Control Language)
  * 데이터 제어 언어
  * 사용자에게 어떤 권한을 부여하거나 빼앗을 때 주로 사용하는 구문
  * GRANT, REVOKE, DENY

***
## 기초문법
* 현재 서버에 존재하는 DB 확인
  * SHOW DATABASES


* 데이터 베이스 생성
  * CREATE DATABASE [database name] CHARACTER SET [character set];
    ```mysql
          CREATE DATABASE Account CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
    ```
  * COLLATE의 ci는 case-insensitive의 약자이며, 대소문자를 구분하지 않게 설정


* 사용할 데이터베이스 선택
  * USE [database name];
  ```mysql
    USE Account;
  ```
  
* 데이터베이스의 테이블 확인
  * SHOW TABLES;

* 데이터베이스 테이블 정보조회
  * SHOW TABLE STATUS;


* 테이블에 무슨 열이 있는지 확인
  * DESCRIBE [table name];
  * DESC [table name];

* 데이터베이스 삭제
  * DROP DATABASE [database name];
  ```mysql
    DROP DATABASE Account;
  ```
  

* 테이블 생성
  * CREATE TABLE [table name]\([column1 name][datatype],...);
  ```mysql
    CREATE TABLE User
    (
       ID INT,
  
       NAME VARCHAR(30),
    
       Birthday DATE,
    
       Age INT
    );
  ```

  
* 테이블 삭제
  * DROP TABLE [table name];
  ```mysql
   DROP TABLE User;
  ```
  

* 테이블에 필드(열) 추가
  * ALTER TABLE [table name] ADD [column name][datatype];
  ```mysql
    ALTER TABLE User ADD PhoneNumber INT;
  ```
  

* 테이블 필드 타입 변경
  * ALTER TABLE [table name] MODIFY COLUMN [column name][column type];
  ```mysql
    ALTER TABLE User MODIFY COLUMN ID VARCHAR(20);
  ```
  

* 테이블 필드 삭제
  * ALTER TABLE [table name] DROP [column name];
  ```mysql
    ALTER TABLE User DROP Age;
  ```
  
* 테이블의 레코드 추가
  * INSERT INTO [table name] VALUES (value1,value2,value3...);
  ```mysql
    INSERT INTO User(ID, Name, BirthDay) VALUES(1, 'dokuny', '1930-10-12');
  ```
* 테이블의 레코드(행) 선택
  * SELECT * FROM [table];
  ```mysql
    SELECT * FROM User;
  ```


* 조회하느 결과에 특정한 조건의 데이터만 보고 싶을 경우
  * SELECT [field name] FROM [table] WHERE [조건];
  ```mysql
    select * 
    from city
    where CountryCode='usa' AND Population>1000000;
  ```
  * ``BETWEEN ... AND`` 로 범위 지정도 가능.
  * ``IN``('특정 값1','특정 값2',...) : 특정값을 가지고 있는 것만 골라낼 수 도 있음.
  * ``LIKE`` : 문자열의 내용을 검색
    * %문자(%) ->  %자리에 아무거나 올 수 있는 데이터들을 전부 불러옴.
    * _ -> 한글자와 매칭할 때.
    ```mysql
     SELECT * 
     FROM city
     WHERE CountryCode LIKE 'KO_'  # KO가 포함된 세글자를 포함하는 데이터를 불러온다.K_로 쓸시에는 K를 포함하는 두글자 짜리를 포함하는 데이터 부름
    
     SELECT *
     FROM city
     WHERE Name LIKE 'Tel %'  # 앞자리에 Tel이 위치한 포함하는 모든 데이터가 검색된다.
    
    
    ```


* 테이블의 레코드 내용 수정
  * UPDATE [table] SET [column]=[value] WHERE [condition];
  ```mysql
    UPDATE User SET Age = 20 WHERE Name = 'dokuny';
  ```
  

* 테이블의 레코드 삭제
  * DELETE FROM [table] WHERE [condition];
  ```mysql
    DELETE FROM User WHERE Name = 'dokuny';
  ```
  
* 서브 쿼리 
  * 쿼리문 안에 또 쿼리문이 들어있는 것
  * 서브쿼리의 결과가 둘 이상이 되면 에러발생
  ```mysql
    select * 
    from city
    where CountryCode = ( select CountryCode FROM city WHERE Name = 'Seoul');
  ```

* ANY
  * 서브쿼리의 여러 개의 결과 중 한가지만 만족해도 가능 
  * SOME은 ANY와 동일함
  * ANY 구문은 IN과 동일한 의미
  ```mysql
    select * 
    from city
    where Population > ANY ( select Population FROM city WHERE District = 'New York');
  ```


* ALL
  * 서브쿼리의 여러 개의 결과를 모두 만족시켜야함.
  ```mysql
    select * 
    from city
    where Population > ALL ( select Population FROM city WHERE District = 'New York');
  ```

* ORDER BY
  * 결과가 출력되는 순서를 조절
  * 기본값은 오름차순
  * 뒤에 DESC 적으면 내림차순 ASC적으면 오름차순인데 ASC는 생략가능
  * 혼합도 가능
  ```mysql
    select * 
    from city
    ORDER BY CountryCode ASC, Population DESC;
  ```
  
* DISTINCT
  * 중복된 것은 제외하여 1개씩만 보여주면서 출력
  * 테이블의 크기가 클수록 효율적.
  ```mysql
    SELECT DISTINCT CountryCode
    FROM city;
  ```
  
* LIMIT
  * 출력 개수를 제한
  * 상위의 N개만 출력하는 'LIMIT N'구문
  * 서버의 처리량을 많이 사용해 서버의 전반적인 성능을 나쁘게하는 악성 쿼리문 개선할 때 사용
  ```mysql
    SELECT * 
    FROM city
    ORDER BY Population DESC
    LIMIT 10;
  ```
  
* GROUP BY
  * 그룹으로 묶어주는 역할
  * 집계함수(Aggregate Function)를 함께 사용
    * AVA() : 평균
    * MIN() : 최소값
    * MAX() : 최대값
    * COUNT() : 행의 개수
    * COUNT(DISTINCT) : 중복 제외된 행의 개수
    * STDEV() : 표준편차
    * VARIANCE() : 분산
  * 효율적인 데이터 그룹화(grouping)
  * 읽기 좋게 하기위해 별칭(Alias) 사용
  * AS를 쓰면 컬럼명을 바꿔줄 수 있다.
  ```mysql
    SELECT CountryCode, MAX(Population) AS 'Average'# 집계함수인 MAX 사용,MIN이나 AVG등을 여기다가 사용한다.
    FROM city
    GROUP BY CountryCode  # 그룹핑 해줌,같은 CountyCode를 가진 애들 끼리 그룹으로 만들어준다.
  
    SELECT COUNT(*)  # 도시의 개수 카운트
    FROM city
  ```
  
* HAVING
  * WHERE과 비슷한 개념으로 조건을 제한한다
  * 집계함수에 조건을 걸어주는 편리한 개념
  * 반드시 GROUP BY 절 다음에 나와야함.
  ```mysql
    SELECT CountryCode, MAX(Population)
    FROM city
    group by CountryCode
    HAVING MAX(Population) > 8000000;
  ```
  
* ROLLUP
  * 총합 또는 중간합계가 필요할 경우 사용
  * GROUP BY절과 함께 WITH ROLLUP 문 사용
  ```mysql
    SELECT CountryCode, Name,SUM(Population)
    FROM city
    group by CountryCode,Name WITH ROLLUP; 
  ```

* JOIN
  * 데이터베이스 내의 여러 테이블에서 가져온 레코드를 조합하여 하나의 테이블이나 결과집합으로 표현
  ```mysql
    SELECT *
    FROM city
    JOIN country ON city.CountryCode = Country.Code;
  ```
  
***