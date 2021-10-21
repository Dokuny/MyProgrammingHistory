##JDBC(Java DataBase Connectivity)
***
### JDBC 프로그래밍 과정
1. JDBC 드라이버 로드
   * Class.forName 이용
      ```java
       Class.forName("com.mysql.jdbc.Driver"); // MySQL JDBC 드라이버 클래스 이름
      ```
2. 데이터베이스 연결
   * JDBC URL,DB 사용자 아이디/비밀번호 필요
   * Connection 클래스의 인스턴스 및 DriverMagnager.getConnection() 이용하여 레퍼런스 참조
      ```java
       String url = "jdbc:mysql://localhost:3306/데이터베이스 이름?useUnicode=true&characterEncoding=UTF-8";
       
       Connection conn = DriverManager.getConnection(url,"아이디","비밀번호");
      ```
3. Statement 생성
   * Statement 객체를 이용해서 문자열로 이루어진 SQL문을 JDBC에서 처리할 수 있는 객체로 변환
   * ``PreparedStatement``를 사용하는 것이 좋다.
     * SQL 문을 미리 만들어두고 변수를 따로 입력하는 방식으로 효율성 및 유지보수 측면에서 좋음
     * Statement 클래스를 상속받음
     * SQL 문 중간중간 데이터가 들어가야 하는 부분에 ``?``를 넣고,``pstmt.setXXX()`` 로 데이터를 연결
     ```java
       // connection 인스턴스의 prepareStatement() 이용, 메서드 매개변수로 실행하려는 SQL문 작성  
       PreparedStatement pstmt = conn.prepareStatement("insert into test values(?,?)"); 
     
       // setXXX 형식으로 XXX에는 자료형에 따라 바뀐다. 
       // ? 는 나오는 순서대로 1,2,3... 이런 식으로 카운트 값을 가진다. 시작은 무조건 1부터 시작한다.
       // 첫번째 매개변수로 카운트 값, 두번째 매개변수로는 ?에 들어갈 값
       pstmt.setString(1,request.getParameter("username"));
       pstmt.setString(2,request.getParameter("email")); 
     ```
4. SQL 문 전송
   * ``executeQuery()``
     * ``SELECT``문을 수행할 때 사용
     * 해당 문의 결과에 해당하는 데이터를 반환
     * 반환값은 ``ResultSet`` 클래스 타입
   * ``executeUpdate()``
     * ``UPDATE``,``DELETE`` 같은 문을 수행할 때 사용
     * 처리한 레코드의 개수를 반환, 처리된 항목이 없다면 0을 반환


5. 결과 받기
   * ``executeQuery()``의 반환값을 ``ResultSet`` 객체에 담는다.
   * ``ResultSet.next()`` : 현재 레코드를 가리키는 포인터인 커서를 이동시킬 수 있다.
   * ``ResultSet.getXXX(필드명|필드 순서)`` : 해당 커서의 레코드를 가져온다.XXX에는 컬럼의 타입이 들어온다(가져올 데이터의 자료형),필드순서는 1부터 시작.
    ```java
      ResultSet rs = pstmt.executeQuery("SELECT id,name FROM member"); 
      
      while(rs.next()){
          System.out.println("ID:" + rs.getString(1));  // 정수를 인자로 받음,인덱스는 1부터 시작
          System.out.println("Name:" + rs.getString("name"));  // String을 인자로 받음,필드명(컬럼명)으로 지정
      }
    ```
6. 연결 해제
   * 데이터베이스 사용이 종료되면 연결을 해제해야 한다.
   * Statement,ResultSet 같은 객체도 종료해주는 것이 좋다
   ```java
     rs.close();
     pstmt.close();
     conn.close();    
   ```
   * 응용 프로그램과 데이터베이스이 연결이 요청에 따라 이루어지고 종료되는 구조는 성능상 적합하지 않기 때문에   
     실제 시스템 구현시에는 ``DBCP:DataBase Connection Pool``를 사용